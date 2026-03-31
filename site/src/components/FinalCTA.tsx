"use client";

import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-32 flex flex-col items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-accent/[0.04] blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[3rem] leading-[1.1] text-foreground">
          Stop chasing clients.
          <br />
          <span className="text-accent">Start attracting them.</span>
        </h2>

        <p className="mt-6 text-lg text-muted leading-relaxed">
          Your system is ready to be built. One payment. Lifetime access.
          Clients in 7–14 days.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 w-full sm:flex-row sm:justify-center">
          <a
            href="https://buy.stripe.com/00g8zL2fj2y1aVaeUX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-accent px-10 py-4 text-sm font-bold text-white tracking-wide transition-all hover:bg-accent-light hover:shadow-lg"
          >
            Get My System Built — $250
          </a>
          <a
            href="https://buy.stripe.com/14k2bnf256Oh0gwdQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full border border-accent/30 bg-accent/[0.06] px-10 py-4 text-sm font-bold text-accent tracking-wide transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            Full Done-For-You — $1,500
          </a>
        </div>

        <a
          href="#book-call"
          className="mt-4 text-sm text-muted/60 underline underline-offset-4 decoration-muted/20 transition-colors hover:text-accent hover:decoration-accent/40"
        >
          Or book a free strategy call
        </a>

        <p className="mt-8 text-[11px] text-muted/40 tracking-wide">
          One-time payment &middot; Instant access &middot; Secure Stripe checkout
        </p>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-8 border-t border-border w-full max-w-xl text-center">
        <p className="text-xs text-muted/40">
          &copy; {new Date().getFullYear()} ClientFlow. Built for freelancers, agencies, and consultants.
        </p>
      </div>
    </section>
  );
}
