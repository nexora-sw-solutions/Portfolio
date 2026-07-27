import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface AutoReplyProps {
  name: string;
  subject: string;
}

export const AutoReply: React.FC<AutoReplyProps> = ({
  name = "Alex Mercer",
  subject = "Custom SaaS Platform Development",
}) => {
  return (
    <Html>
      <Head />
      <Preview>We received your inquiry: {subject} | Nexora Engineering</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={brandText}>NEXORA</Text>
            <Text style={subBrandText}>Digital Transformation Studio</Text>
          </Section>

          {/* Main Content */}
          <Section style={section}>
            <Heading style={heading}>Inquiry Received</Heading>
            <Text style={paragraph}>
              Hi <strong>{name}</strong>,
            </Text>
            <Text style={paragraph}>
              Thank you for reaching out to Nexora. We have received your project scope regarding <strong>&ldquo;{subject}&rdquo;</strong>.
            </Text>
            <Text style={paragraph}>
              Our software architects and engineering leads are currently reviewing your requirements. We pride ourselves on rapid, transparent communication and will follow up with a detailed initial assessment within <strong>24 business hours</strong>.
            </Text>

            {/* Why Nexora Card */}
            <Section style={card}>
              <Text style={cardTitle}>While You Wait: Our Engineering SLA</Text>
              <Row style={featureRow}>
                <Column style={bullet}>⚡</Column>
                <Column style={featureText}>
                  <strong>Technical Excellence:</strong> Clean, scalable, strictly-typed code architectures built for extreme traffic.
                </Column>
              </Row>
              <Row style={featureRow}>
                <Column style={bullet}>🔒</Column>
                <Column style={featureText}>
                  <strong>Security First:</strong> End-to-end encryption and database partitioning built into every blueprint.
                </Column>
              </Row>
              <Row style={featureRow}>
                <Column style={bullet}>🛡️</Column>
                <Column style={featureText}>
                  <strong>Long-term SLA:</strong> 99.99% system uptime management and dedicated post-launch support.
                </Column>
              </Row>
            </Section>

            <Text style={paragraph}>
              If you have any urgent details or attachments to add to your project brief in the meantime, feel free to reply directly to this email!
            </Text>

            <Text style={signoff}>
              Best regards,<br />
              <strong>The Nexora Engineering Team</strong>
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Nexora Solutions. All rights reserved.
              <br />
              Based in Kandy, Sri Lanka • Serving clients worldwide
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AutoReply;

// Styling tokens for React Email
const main = {
  backgroundColor: "#f1f5f9",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  margin: "0 auto",
  maxWidth: "600px",
  overflow: "hidden" as const,
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
};

const header = {
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  padding: "32px",
  textAlign: "center" as const,
  borderBottom: "3px solid #6366f1",
};

const brandText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "900",
  letterSpacing: "3px",
  margin: "0",
};

const subBrandText = {
  color: "#00E5FF",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "4px 0 0 0",
};

const section = {
  padding: "32px",
};

const heading = {
  color: "#0f172a",
  fontSize: "24px",
  fontWeight: "800",
  margin: "0 0 20px 0",
};

const paragraph = {
  color: "#334155",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const card = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "10px",
  padding: "20px",
  margin: "24px 0",
};

const cardTitle = {
  color: "#0f172a",
  fontSize: "14px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 12px 0",
};

const featureRow = {
  margin: "10px 0",
};

const bullet = {
  width: "28px",
  verticalAlign: "top" as const,
  fontSize: "16px",
};

const featureText = {
  color: "#475569",
  fontSize: "13px",
  lineHeight: "20px",
  paddingBottom: "8px",
};

const signoff = {
  color: "#0f172a",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "24px 0 0 0",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "0",
};

const footer = {
  backgroundColor: "#f8fafc",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0",
};
