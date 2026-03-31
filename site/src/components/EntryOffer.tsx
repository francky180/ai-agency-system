"use client";

import { motion } from "motion/react";
import { LINKS } from "@/lib/links";

const features = [
  { text: "Production-ready website", detail: "Custom-designed, mobile-responsive, conversion-optimized" },
  { text: "AI marketing engine", detail: "SEO audits, copy generation, social content, email sequences" },
  { text: "Automation workflows", detail: "Lead capture, follow-up sequences, CRM-ready pipeline" },
  { text: "Client acquisition strategy", detail: "DM scripts, email templates, outreach playbook with KPIs" },
  { text: "System dashboard", detail: "Monitor all capabilities from one interface" },
  { text: "Full documentation", detail: "Step-by-step setup guide, video-ready walkthrough" },
];

export default function EntryOffer() {
  return (
    <section id="pricing" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">Core System</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          Everything to launch. One price.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          The complete stack to start acquiring clients — for less than a single freelance invoice.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-xl"
      >
        <div className="rounded-2xl border border-border bg-card p-10 sm:p-12">
          {/* Price block */}
          <div className="flex items-end gap-3 mb-1">
            <span className="text-5xl font-bold text-accent tracking-tight">$250</span>
            <span className="text-sm text-muted pb-1.5">one-time</span>
          </div>
          <p className="text-sm text-muted-dim mb-8">Instant access. No recurring fees. You own everything.</p>

          <div className="h-px bg-border mb-8" />

          {/* Features */}
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-dim mb-6">What&apos;s Included</p>
          <ul className="space-y-5 mb-10">
            {features.map((f) => (
              <li key={f.text} className="flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div>
                  <span className="text-sm font-medium text-foreground">{f.text}</span>
                  <span className="text-sm text-muted"> — {f.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Who it's for */}
          <div className="rounded-xl bg-accent/[0.04] border border-accent/10 p-5 mb-10">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-2">Built For</p>
            <p className="text-sm text-muted leading-relaxed">
              Freelancers, agencies, and consultants who want a working client acquisition system — without hiring a team or spending months building one.
            </p>
          </div>

          {/* CTA */}
          <a
            href={LINKS.entry}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-accent py-4 text-sm font-bold text-background tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
          >
            Launch My System — $250
          </a>
          <p className="mt-3 text-center text-[11px] text-muted-dim">Secure checkout via Stripe &middot; Instant access after payment</p>
        </div>
      </motion.div>
    </section>
  );
}
