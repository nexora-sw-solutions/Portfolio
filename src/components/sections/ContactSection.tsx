"use client";

import React, { useState } from "react";
import { companyDetails } from "@/data/company";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { Mail, Phone, Globe, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormSchema, ContactFormValues, ContactApiResponse } from "@/lib/schemas/contact";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [renderTime] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-form-render-time": renderTime.toString(),
        },
        body: JSON.stringify(data),
      });

      const result: ContactApiResponse = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.message || "Failed to submit project scope. Please try again.");
      } else {
        setIsSubmitted(true);
        reset();
      }
    } catch (err) {
      console.error("Submission error:", err);
      setServerError("A network error occurred. Please email us directly at nexora280@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="dark py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full brand-bg-gradient opacity-[0.03] dark:opacity-[0.05] blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Start Your Project"
          description="Let's build something exceptional. Tell us about your operational bottlenecks and we will schedule an engineering discovery call."
        />
        {/* Animated Brand Divider */}
        <div className="w-full flex justify-center mt-8">
          <div className="w-32 h-1 brand-bg-gradient rounded-full opacity-80" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-stretch mt-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <ScrollReveal direction="left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                Contact Information
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                Connect with our team direct or submit the project scope form. We typical respond inside 1 business day.
              </p>
            </ScrollReveal>

            {/* Info Cards Grid */}
            <div className="flex flex-col gap-4 mt-4">
              <ScrollReveal direction="left" delay={0.1}>
                <a 
                  href={`mailto:${companyDetails.contact.email}`}
                  className="p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/10 hover:border-primary/20 backdrop-blur-md transition-all duration-300 flex items-start gap-4 shadow-sm"
                >
                  <span className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-950 dark:text-slate-200 text-sm">Email Support</h5>
                    <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 leading-normal">
                      {companyDetails.contact.email}
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <a 
                  href={`tel:${companyDetails.contact.phone}`}
                  className="p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/10 hover:border-primary/20 backdrop-blur-md transition-all duration-300 flex items-start gap-4 shadow-sm"
                >
                  <span className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-950 dark:text-slate-200 text-sm">Call Direct</h5>
                    <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 leading-normal">
                      {companyDetails.contact.phone}
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <div className="p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/10 backdrop-blur-md flex items-start gap-4 shadow-sm">
                  <span className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Globe className="w-5 h-5" />
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-950 dark:text-slate-200 text-sm">Location</h5>
                    <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 leading-normal">
                      {companyDetails.contact.address}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Contact Scope Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" className="h-full">
              <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                {/* Glow layer */}
                <div className="absolute -top-1/4 -right-1/4 w-[250px] h-[250px] rounded-full brand-bg-gradient opacity-[0.05] dark:opacity-[0.08] blur-[80px] pointer-events-none" />

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-10 flex flex-col items-center gap-5"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-md shadow-emerald-500/5">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                          Project Scope Submitted
                        </h4>
                        <p className="text-sm text-slate-700 dark:text-slate-400 mt-2 font-medium leading-relaxed max-w-sm mx-auto">
                          Thank you for reaching out. Our software architects have received your request and will follow up within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors cursor-pointer"
                        id="send-another-message-btn"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10 text-left">
                      {/* Name & Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-sm font-semibold transition-all"
                            placeholder="Alex Mercer"
                          />
                          {errors.name && (
                            <span className="text-[10px] font-bold text-red-500 mt-0.5">{errors.name.message}</span>
                          )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-sm font-semibold transition-all"
                            placeholder="alex@company.com"
                          />
                          {errors.email && (
                            <span className="text-[10px] font-bold text-red-500 mt-0.5">{errors.email.message}</span>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="subject" className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                          Project Objective / Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          {...register("subject")}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-sm font-semibold transition-all"
                          placeholder="POS offline integration or Custom SaaS build"
                        />
                        {errors.subject && (
                          <span className="text-[10px] font-bold text-red-500 mt-0.5">{errors.subject.message}</span>
                        )}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                          Project Details / Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          {...register("message")}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-sm font-semibold transition-all resize-none"
                          placeholder="Briefly describe what your operations team is trying to solve..."
                        />
                        {errors.message && (
                          <span className="text-[10px] font-bold text-red-500 mt-0.5">{errors.message.message}</span>
                        )}
                      </div>

                      {/* Invisible honeypot field for anti-spam bot detection */}
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        {...register("confirm_email_address")}
                        className="opacity-0 absolute -left-[9999px] top-0 h-0 w-0 z-[-1] pointer-events-none"
                      />

                      {/* Server Error Banner */}
                      {serverError && (
                        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold flex items-center justify-between gap-2">
                          <span>⚠️ {serverError}</span>
                          <button
                            type="button"
                            onClick={() => setServerError(null)}
                            className="hover:underline text-[10px] uppercase tracking-wider cursor-pointer font-extrabold shrink-0"
                          >
                            Dismiss
                          </button>
                        </div>
                      )}

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:brand-bg-gradient hover:text-white hover-brand-glow disabled:bg-slate-400 disabled:dark:bg-slate-700 transition-all cursor-pointer"
                        id="contact-form-submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4.5 h-4.5 animate-spin" />
                            <span>Submitting Scope...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Project Scope</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
