"use client";

import { motion } from "motion/react";
import { LINKS } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
      >
        {/* Badge */}
        <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.06] px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Done-For-You Client Acquisition
        </span>

        {/* Headline */}
        <h1 className="text-[2.75rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[3.75rem] lg:text-[4.5rem] text-foreground">
          Your entire client pipeline,
          <br />
          <span className="text-accent">built and deployed for you.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          We set up your website, marketing engine, automation workflows, and outreach playbook.
          You focus on closing deals — the system handles lead generation.
        </p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 w-full sm:flex-row sm:justify-center"
        >
          <a
            href={LINKS.entry}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-accent px-10 py-4 text-sm font-bold text-background tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
          >
            Launch My System — $250
          </a>
          <a
            href={LINKS.premium}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full border border-accent/30 bg-accent/[0.06] px-10 py-4 text-sm font-bold text-accent tracking-wide transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            Full Done-For-You — $1,500
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-muted-dim tracking-wide">
            <span>One-time payment</span>
            <span className="hidden sm:inline text-border-light">|</span>
            <span>Instant access</span>
            <span className="hidden sm:inline text-border-light">|</span>
            <span>Secure Stripe checkout</span>
            <span className="hidden sm:inline text-border-light">|</span>
            <span>No subscriptions ever</span>
          </div>

          {/* Built for line */}
          <p className="text-[11px] text-muted-dim/50 tracking-wide">
            Built for freelancers, consultants, and agencies doing $0–$500K/yr
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
