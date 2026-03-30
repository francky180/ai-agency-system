"use client";

import { motion } from "motion/react";

const features = [
  { text: "Premium agency website", detail: "Next.js + Tailwind, production-ready" },
  { text: "AI marketing engine", detail: "SEO, copy, social, email, competitor intel" },
  { text: "Automation workflows", detail: "Every task structured and repeatable" },
  { text: "Step-by-step launch guide", detail: "Beginner-friendly, zero guesswork" },
  { text: "System status dashboard", detail: "Live monitoring of all subsystems" },
  { text: "Full documentation", detail: "Setup, config, and daily operations" },
];

export default function EntryOffer() {
  return (
    <section id="entry-offer" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">Start Here</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Get the core system.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          Everything you need to launch — at a fraction of what it costs to build from scratch.
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
          <p className="text-sm text-muted/70 mb-8">Instant access. No recurring fees. No upsell traps.</p>

          <div className="h-px bg-border mb-8" />

          {/* Features */}
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted/70 mb-6">What&apos;s Included</p>
          <ul className="space-y-5 mb-10">
            {features.map((f) => (
              <li key={f.text} className="flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div>
                  <span className="text-sm font-medium">{f.text}</span>
                  <span className="text-sm text-muted"> — {f.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Who it's for */}
          <div className="rounded-xl bg-accent/[0.04] border border-accent/10 p-5 mb-10">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-2">Built For</p>
            <p className="text-sm text-muted leading-relaxed">
              Freelancers, solopreneurs, and consultants ready to launch an AI-powered agency — without hiring a team or spending months on infrastructure.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://buy.stripe.com/00g8zL2fj2y1aVaeUX"
            className="flex w-full items-center justify-center rounded-full bg-accent py-4 text-sm font-bold text-black tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_50px_rgba(201,168,76,0.3)]"
          >
            Get Access — $250
          </a>
          <p className="mt-3 text-center text-[11px] text-muted/40">Secure checkout via Stripe</p>
        </div>
      </motion.div>
    </section>
  );
}
