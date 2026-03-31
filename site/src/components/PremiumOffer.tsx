"use client";

import { motion } from "motion/react";
import { LINKS } from "@/lib/links";

const coreLine = "Everything in the Core System ($250 value)";

const premiumFeatures = [
  { text: "Custom branding & positioning", detail: "Your brand identity, built to attract your ideal clients" },
  { text: "Multi-channel campaigns deployed", detail: "Email, social, outreach — launched and running for you" },
  { text: "Custom automation workflows", detail: "Tailored to your niche, service model, and sales process" },
  { text: "Priority support & onboarding", detail: "Direct access, hands-on guidance from launch to first client" },
  { text: "Revenue optimization playbook", detail: "Pricing strategy, packaging frameworks, closing templates" },
  { text: "Full deployment assistance", detail: "We launch it with you — domain, hosting, everything live" },
];

export default function PremiumOffer() {
  return (
    <section id="premium-offer" className="relative px-6 py-28 flex flex-col items-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">Done-For-You</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          We build everything. You close clients.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          Custom branding. Campaigns deployed. Revenue systems live from day one.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-full max-w-xl"
      >
        <div className="rounded-2xl border border-accent/25 bg-card p-10 sm:p-12 shadow-[0_0_60px_rgba(201,168,76,0.06)]">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Most Popular
            </span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 mb-1">
            <span className="text-5xl font-bold text-accent tracking-tight">$1,500</span>
            <span className="text-sm text-muted pb-1.5">one-time</span>
          </div>
          <p className="text-sm text-muted-dim mb-8">Complete system. Full support. Lifetime access.</p>

          <div className="h-px bg-border mb-8" />

          {/* Core includes */}
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-dim mb-5">Includes</p>
          <div className="flex items-start gap-3 mb-6 text-sm">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-muted">{coreLine}</span>
          </div>

          {/* Premium extras */}
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-5">Plus</p>
          <ul className="space-y-5 mb-10">
            {premiumFeatures.map((f) => (
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

          {/* CTA */}
          <a
            href={LINKS.premium}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-accent py-4 text-sm font-bold text-background tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
          >
            Get the Full System — $1,500
          </a>
          <p className="mt-3 text-center text-[11px] text-muted-dim">Secure checkout via Stripe &middot; Hands-on launch included</p>
        </div>
      </motion.div>
    </section>
  );
}
