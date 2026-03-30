"use client";

import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-32 flex flex-col items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-glow blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Your agency is one
          <br />
          <span className="text-accent">decision</span> away.
        </h2>

        <p className="mt-6 text-lg text-muted leading-relaxed">
          The system is built. The infrastructure is ready. The only thing
          missing is you hitting start.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://buy.stripe.com/14k2bnf256Oh0gwdQQ"
            className="rounded-full bg-accent px-10 py-4 text-sm font-semibold text-black transition-all hover:bg-accent-light hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            Start for $250
          </a>
          <a
            href="https://buy.stripe.com/3cI14n7Og2rn6g00Vhao804"
            className="rounded-full border border-accent/30 bg-accent-dim px-10 py-4 text-sm font-semibold text-accent-light transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            Full System — $1,500
          </a>
        </div>

        <p className="mt-8 text-xs text-muted/50">
          One-time payment &middot; Instant access &middot; Secure checkout via Stripe
        </p>
      </motion.div>
    </section>
  );
}
