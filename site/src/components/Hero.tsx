"use client";

import { motion } from "motion/react";

const LINKS = {
  entry: "https://buy.stripe.com/14k2bnf256Oh0gwdQQ",
  premium: "https://buy.stripe.com/3cI14n7Og2rn6g00Vhao804",
  call: "#book-call",
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-accent-glow blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        {/* Badge */}
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-dim px-5 py-2 text-xs font-medium tracking-widest uppercase text-accent-light">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          AI-Powered Agency System
        </span>

        {/* Headline */}
        <h1 className="text-[2.75rem] font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Build a profitable agency
          <br />
          <span className="text-accent">without the overhead.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          A complete, done-for-you system — website, marketing engine,
          automation workflows, and strategy — so you can launch and
          scale with AI doing the heavy lifting.
        </p>

        {/* CTA Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Primary CTA */}
          <a
            href={LINKS.entry}
            className="group relative rounded-full bg-accent px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-accent-light hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            Get Started — $250
          </a>

          {/* Secondary CTA */}
          <a
            href={LINKS.premium}
            className="rounded-full border border-accent/30 bg-accent-dim px-8 py-4 text-sm font-semibold text-accent-light transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            Full System — $1,500
          </a>

          {/* Tertiary CTA */}
          <a
            href={LINKS.call}
            className="rounded-full border border-border-light px-8 py-4 text-sm font-semibold text-muted transition-all hover:border-muted hover:text-foreground"
          >
            Book a Call
          </a>
        </motion.div>

        {/* Trust line */}
        <p className="mt-8 text-xs text-muted/60 tracking-wide">
          One-time payment &middot; Instant access &middot; No subscriptions
        </p>
      </motion.div>
    </section>
  );
}
