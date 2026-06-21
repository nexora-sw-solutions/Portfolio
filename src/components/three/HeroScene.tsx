"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Suppress THREE.Clock deprecation warning from upstream @react-three/fiber
if (typeof console !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    originalWarn(...args);
  };
}

// Brand Colors
const BRAND_CYAN = "#00E5FF";
const BRAND_BLUE = "#6366F1";
const BRAND_PINK = "#FF00FF";

const PARTICLE_COUNT = 65;
const CONNECTION_DISTANCE = 3.5;

// Helper to generate particles outside of render to keep it pure
const generateParticles = (width: number, height: number, count: number) => {
  const temp = [];
  for (let i = 0; i < count; i++) {
    temp.push({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: (Math.random() - 0.5) * 8 - 2,
      vx: (Math.random() - 0.5) * 0.01,
      vy: (Math.random() - 0.5) * 0.01,
      vz: (Math.random() - 0.5) * 0.01,
      colorIdx: Math.floor(Math.random() * 3),
    });
  }
  return temp;
};

function TechnologyNetwork() {
  const { viewport } = useThree();
  const pointsRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const linesGeoRef = useRef<THREE.BufferGeometry>(null);

  const particlesRef = useRef<any[] | null>(null);

  // Initialize once without triggering react-hooks/purity or setState issues
  if (particlesRef.current === null) {
    // Basic fallback bounds for SSR/initial render
    const w = 15;
    const h = 10;
    particlesRef.current = generateParticles(w, h, PARTICLE_COUNT);
  }

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const brandColors = useMemo(() => [
    new THREE.Color(BRAND_CYAN),
    new THREE.Color(BRAND_BLUE),
    new THREE.Color(BRAND_PINK)
  ], []);

  // Update instance colors
  useEffect(() => {
    if (pointsRef.current && particlesRef.current && particlesRef.current.length > 0) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pointsRef.current.setColorAt(i, brandColors[particlesRef.current[i].colorIdx]);
      }
      pointsRef.current.instanceColor!.needsUpdate = true;
    }
  }, [brandColors]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesGeoRef.current || !particlesRef.current || particlesRef.current.length === 0) return;

    const particles = particlesRef.current;

    // Cap delta to prevent huge jumps if tab was inactive
    const dt = Math.min(delta, 0.1);

    const positions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3);
    let lineIndex = 0;

    // Target pointer mapped to 3D space
    const targetX = (state.pointer.x * viewport.width) / 2;
    const targetY = (state.pointer.y * viewport.height) / 2;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Subtle mouse attraction
      const dxMouse = targetX - p.x;
      const dyMouse = targetY - p.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      
      if (distMouse < 5) {
        p.vx += (dxMouse * 0.0003);
        p.vy += (dyMouse * 0.0003);
      }

      // Add velocity
      p.x += p.vx * (dt * 60);
      p.y += p.vy * (dt * 60);
      p.z += p.vz * (dt * 60);

      // Dampen velocity to prevent infinite acceleration
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.vz *= 0.98;

      // Base random wandering if moving too slow
      if (Math.abs(p.vx) < 0.005) p.vx += (Math.random() - 0.5) * 0.002;
      if (Math.abs(p.vy) < 0.005) p.vy += (Math.random() - 0.5) * 0.002;

      // Wrap around screen gracefully
      const boundsX = Math.max(viewport.width, 10);
      const boundsY = Math.max(viewport.height, 8);
      
      if (p.x > boundsX) p.x = -boundsX;
      if (p.x < -boundsX) p.x = boundsX;
      if (p.y > boundsY) p.y = -boundsY;
      if (p.y < -boundsY) p.y = boundsY;
      if (p.z > 2) p.vz *= -1;
      if (p.z < -10) p.vz *= -1;

      dummy.position.set(p.x, p.y, p.z);
      
      // Add subtle scale pulse
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      pointsRef.current.setMatrixAt(i, dummy.matrix);

      // Connect nodes that are close to each other
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const p2 = particles[j];
        const dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2) + Math.pow(p.z - p2.z, 2));

        if (dist < CONNECTION_DISTANCE) {
          // Calculate an intensity based on distance (closer = brighter)
          const intensity = 1.0 - (dist / CONNECTION_DISTANCE);
          
          positions[lineIndex * 3] = p.x;
          positions[lineIndex * 3 + 1] = p.y;
          positions[lineIndex * 3 + 2] = p.z;

          positions[(lineIndex + 1) * 3] = p2.x;
          positions[(lineIndex + 1) * 3 + 1] = p2.y;
          positions[(lineIndex + 1) * 3 + 2] = p2.z;

          const c1 = brandColors[p.colorIdx];
          const c2 = brandColors[p2.colorIdx];

          // Set colors and simulate alpha by mixing with dark background color based on intensity
          // Alternatively, we use AdditiveBlending and scale the RGB values to dim them
          colors[lineIndex * 3] = c1.r * intensity * 0.8;
          colors[lineIndex * 3 + 1] = c1.g * intensity * 0.8;
          colors[lineIndex * 3 + 2] = c1.b * intensity * 0.8;

          colors[(lineIndex + 1) * 3] = c2.r * intensity * 0.8;
          colors[(lineIndex + 1) * 3 + 1] = c2.g * intensity * 0.8;
          colors[(lineIndex + 1) * 3 + 2] = c2.b * intensity * 0.8;

          lineIndex += 2;
        }
      }
    }

    pointsRef.current.instanceMatrix.needsUpdate = true;

    linesGeoRef.current.setAttribute('position', new THREE.BufferAttribute(positions.subarray(0, lineIndex * 3), 3));
    linesGeoRef.current.setAttribute('color', new THREE.BufferAttribute(colors.subarray(0, lineIndex * 3), 3));
    
    // Set draw range for performance
    linesGeoRef.current.setDrawRange(0, lineIndex);

    // Parallax camera movement based on mouse
    const pointerX = state.pointer.x * 0.5;
    const pointerY = state.pointer.y * 0.5;

    state.camera.position.x += (pointerX - state.camera.position.x) * 0.05;
    state.camera.position.y += (pointerY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, -5);
  });

  return (
    <group>
      {/* Network Nodes */}
      <instancedMesh ref={pointsRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      {/* Network Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry ref={linesGeoRef} />
        <lineBasicMaterial vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-transparent overflow-hidden pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <TechnologyNetwork />
      </Canvas>
    </div>
  );
}

