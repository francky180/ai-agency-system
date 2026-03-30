"use client";

import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-32 flex flex-col items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-accent/[0.06] blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[3rem] leading-[1.1]">
          Stop building from scratch.
          <br />
          <span className="text-accent">Start closing clients.</span>
        </h2>

        <p className="mt-6 text-lg text-muted leading-relaxed">
          The system is built. The infrastructure is ready.
          Every day you wait is a day your competitors move forward.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 w-full sm:flex-row sm:justify-center">
          <a
            href="https://buy.stripe.com/14k2bnf256Oh0gwdQQ"
            className="w-full sm:w-auto rounded-full bg-accent px-10 py-4 text-sm font-bold text-black tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_50px_rgba(201,168,76,0.35)]"
          >
            Get Started — $250
          </a>
          <a
            href="https://buy.stripe.com/3cI14n7Og2rn6g00Vhao804"
            className="w-full sm:w-auto rounded-full border border-accent/30 bg-accent/[0.06] px-10 py-4 text-sm font-bold text-accent-light tracking-wide transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            Full System — $1,500
          </a>
        </div>

        <p className="mt-8 text-[11px] text-muted/40 tracking-wide">
          One-time payment &middot; Instant access &middot; Secure Stripe checkout
        </p>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-8 border-t border-border w-full max-w-xl text-center">
        <p className="text-xs text-muted/30">
          &copy; {new Date().getFullYear()} AI Agency System. All rights reserved.
        </p>
      </div>
    </section>
  );
}
