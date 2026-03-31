"use client";

import { motion } from "motion/react";
import { LINKS } from "@/lib/links";

const coreFeatures = [
  "Production-ready website",
  "AI marketing engine",
  "Automation workflows",
  "Outreach playbook & scripts",
  "System dashboard",
  "Full documentation",
];

const premiumExtras = [
  "Custom branding & positioning",
  "Multi-channel campaigns deployed",
  "Custom automation workflows",
  "Priority support & onboarding",
  "Revenue optimization playbook",
  "Full deployment assistance",
];

function Check() {
  return (
    <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function Dash() {
  return <span className="h-4 w-4 shrink-0 flex items-center justify-center text-muted-dim/40">—</span>;
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-accent/[0.04] blur-[200px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">Pricing</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          One system. Two ways to start.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          Pick the path that fits — both include the complete system. No subscriptions, no hidden fees.
        </p>
      </motion.div>

      {/* Side-by-side pricing cards */}
      <div className="relative z-10 w-full max-w-4xl grid gap-6 sm:grid-cols-2 items-start">

        {/* Core — $250 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-10"
        >
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-dim mb-6">Core System</p>

          <div className="flex items-end gap-2 mb-1">
            <span className="text-4xl font-bold text-foreground tracking-tight">$250</span>
            <span className="text-sm text-muted-dim pb-0.5">one-time</span>
          </div>
          <p className="text-sm text-muted-dim mb-8">You launch it. Full system, full docs.</p>

          <div className="h-px bg-border mb-8" />

          <ul className="space-y-4 mb-10">
            {coreFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <Check />
                {f}
              </li>
            ))}
          </ul>

          <div className="h-px bg-border mb-8" />

          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-dim/60 mb-4">Premium features</p>
          <ul className="space-y-3 mb-10">
            {premiumExtras.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-muted-dim/50">
                <Dash />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={LINKS.entry}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full border border-accent/30 bg-accent/[0.06] py-4 text-sm font-bold text-accent tracking-wide transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            Launch My System — $250
          </a>
          <p className="mt-3 text-center text-[11px] text-muted-dim">Instant access after payment</p>
        </motion.div>

        {/* Premium — $1,500 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-accent/25 bg-card p-8 sm:p-10 shadow-[0_0_60px_rgba(201,168,76,0.06)] relative"
        >
          {/* Most Popular badge */}
          <div className="absolute -top-3.5 left-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase text-background">
              Most Popular
            </span>
          </div>

          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-6 mt-2">Done-For-You</p>

          <div className="flex items-end gap-2 mb-1">
            <span className="text-4xl font-bold text-accent tracking-tight">$1,500</span>
            <span className="text-sm text-muted-dim pb-0.5">one-time</span>
          </div>
          <p className="text-sm text-muted-dim mb-8">We launch it with you. Custom + hands-on.</p>

          <div className="h-px bg-border mb-8" />

          <ul className="space-y-4 mb-10">
            {coreFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <Check />
                {f}
              </li>
            ))}
          </ul>

          <div className="h-px bg-accent/10 mb-8" />

          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">Premium features</p>
          <ul className="space-y-4 mb-10">
            {premiumExtras.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <Check />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={LINKS.premium}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-accent py-4 text-sm font-bold text-background tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
          >
            Get the Full System — $1,500
          </a>
          <p className="mt-3 text-center text-[11px] text-muted-dim">Hands-on launch included</p>
        </motion.div>
      </div>

      {/* Trust footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] text-muted-dim tracking-wide"
      >
        <span>Secure Stripe checkout</span>
        <span className="text-border-light">|</span>
        <span>No subscriptions ever</span>
        <span className="text-border-light">|</span>
        <span>You own everything</span>
        <span className="text-border-light">|</span>
        <span>Lifetime access</span>
      </motion.div>
    </section>
  );
}
