"use client";

import { motion } from "motion/react";

const coreFeatures = [
  "Everything in the $250 system",
];

const premiumFeatures = [
  "Done-for-you agency structure and branding",
  "Advanced marketing strategies and campaigns",
  "Custom automation workflows",
  "Priority support and onboarding",
  "Revenue optimization playbook",
  "Deployment and launch assistance",
];

export default function PremiumOffer() {
  return (
    <section id="premium-offer" className="relative px-6 py-28 flex flex-col items-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent-glow blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-14"
      >
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Go Further</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Upgrade to the full system.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          For those who want everything done, configured, and optimized — ready to generate revenue from day one.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-full max-w-xl"
      >
        <div className="rounded-2xl border border-accent/30 bg-card p-10 sm:p-12 shadow-[0_0_80px_rgba(201,168,76,0.06)]">
          {/* Recommended badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-accent">
              Recommended
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold text-accent">$1,500</span>
            <span className="text-sm text-muted">one-time</span>
          </div>
          <p className="text-sm text-muted mb-8">Complete system. Full support. No recurring fees.</p>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* Core includes */}
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-5">Includes everything</p>
          <ul className="space-y-4 mb-6">
            {coreFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-muted">{f}</span>
              </li>
            ))}
          </ul>

          {/* Premium extras */}
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-5">Plus</p>
          <ul className="space-y-4 mb-10">
            {premiumFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://buy.stripe.com/3cI14n7Og2rn6g00Vhao804"
            className="flex w-full items-center justify-center rounded-full bg-accent py-4 text-sm font-semibold text-black transition-all hover:bg-accent-light hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            Get the Full System — $1,500
          </a>
          <p className="mt-4 text-center text-xs text-muted/60">
            Secure checkout via Stripe
          </p>
        </div>
      </motion.div>
    </section>
  );
}
