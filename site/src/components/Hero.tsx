"use client";

import { motion } from "motion/react";

const LINKS = {
  entry: "https://buy.stripe.com/14k2bnf256Oh0gwdQQ",
  premium: "https://buy.stripe.com/3cI14n7Og2rn6g00Vhao804",
  call: "#book-call",
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-accent/[0.04] blur-[180px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent/[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
      >
        {/* Badge */}
        <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.06] px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          AI-Powered Agency Infrastructure
        </span>

        {/* Headline */}
        <h1 className="text-[2.75rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[3.75rem] lg:text-[4.5rem]">
          Launch a six-figure agency
          <br />
          <span className="text-accent">in days, not months.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          The complete done-for-you system — premium website, AI marketing engine,
          automation workflows, and client acquisition strategy.
          Stop building from scratch. Start closing clients.
        </p>

        {/* CTA Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 w-full sm:flex-row sm:justify-center"
        >
          <a
            href={LINKS.entry}
            className="w-full sm:w-auto rounded-full bg-accent px-10 py-4 text-sm font-bold text-black tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_50px_rgba(201,168,76,0.35)]"
          >
            Get Started — $250
          </a>
          <a
            href={LINKS.premium}
            className="w-full sm:w-auto rounded-full border border-accent/30 bg-accent/[0.06] px-10 py-4 text-sm font-bold text-accent-light tracking-wide transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            Full System — $1,500
          </a>
          <a
            href={LINKS.call}
            className="w-full sm:w-auto rounded-full border border-border-light px-10 py-4 text-sm font-semibold text-muted tracking-wide transition-all hover:border-muted hover:text-foreground"
          >
            Book a Call
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-muted/50 tracking-wide"
        >
          <span>One-time payment</span>
          <span className="hidden sm:inline text-border-light">|</span>
          <span>Instant access</span>
          <span className="hidden sm:inline text-border-light">|</span>
          <span>Secure Stripe checkout</span>
          <span className="hidden sm:inline text-border-light">|</span>
          <span>No subscriptions</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
