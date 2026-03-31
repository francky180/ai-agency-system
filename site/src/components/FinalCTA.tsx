"use client";

import { motion } from "motion/react";
import { LINKS } from "@/lib/links";

export default function FinalCTA() {
  return (
    <section className="relative px-6 pt-32 pb-16 flex flex-col items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-accent/[0.06] blur-[200px]" />

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
          <span className="text-accent">Start closing them.</span>
        </h2>

        <p className="mt-6 text-lg text-muted leading-relaxed">
          Your system is ready to be built. One payment. Lifetime access.
          Leads in 7–14 days.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 w-full sm:flex-row sm:justify-center">
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
        </div>

        <a
          href="#book-call"
          className="mt-4 inline-block text-sm text-muted-dim underline underline-offset-4 decoration-muted-dim/20 transition-colors hover:text-accent hover:decoration-accent/40"
        >
          Or book a free strategy call
        </a>

        <p className="mt-8 text-[11px] text-muted-dim tracking-wide">
          One-time payment &middot; Instant access &middot; Secure Stripe checkout
        </p>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 mt-24 pt-8 border-t border-border w-full max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-sm font-bold tracking-tight text-foreground">
              Client<span className="text-accent">Flow</span>
            </span>
            <p className="text-xs text-muted-dim">
              Client acquisition systems for freelancers, agencies, and consultants.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-dim">
            <a href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
            <a href="#book-call" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>

        <div className="border-t border-border pt-6 pb-20 sm:pb-6 text-center">
          <p className="text-[11px] text-muted-dim/60">
            &copy; {new Date().getFullYear()} ClientFlow. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
