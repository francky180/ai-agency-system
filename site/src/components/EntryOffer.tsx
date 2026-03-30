"use client";

import { motion } from "motion/react";

const features = [
  "Premium agency website (Next.js + Tailwind)",
  "AI marketing engine (SEO, copy, social, email)",
  "Automation workflows for every task",
  "Step-by-step setup guide",
  "System status dashboard",
  "Full documentation",
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
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Start Here</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Start with the core system.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          Everything you need to launch your AI-powered agency — at a fraction of what it would cost to build from scratch.
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
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold text-accent">$250</span>
            <span className="text-sm text-muted">one-time</span>
          </div>
          <p className="text-sm text-muted mb-8">Instant access. No recurring fees.</p>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* What's included */}
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-5">What you get</p>
          <ul className="space-y-4 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* Who it's for */}
          <div className="rounded-xl bg-surface border border-border p-5 mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">Perfect for</p>
            <p className="text-sm text-muted leading-relaxed">
              Freelancers, solopreneurs, and consultants who want to launch an AI-powered agency quickly — without hiring a team or spending months building infrastructure.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://buy.stripe.com/14k2bnf256Oh0gwdQQ"
            className="flex w-full items-center justify-center rounded-full bg-accent py-4 text-sm font-semibold text-black transition-all hover:bg-accent-light hover:shadow-[0_0_40px_rgba(201,168,76,0.25)]"
          >
            Get Access for $250
          </a>
        </div>
      </motion.div>
    </section>
  );
}
