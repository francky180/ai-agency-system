"use client";

import { motion } from "motion/react";

export default function BookCall() {
  return (
    <section id="book-call" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-2xl border border-border bg-card p-10 sm:p-14 text-center shadow-sm">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              Free Strategy Session
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Not sure which plan fits?
          </h2>

          <p className="mt-5 max-w-md mx-auto text-muted leading-relaxed">
            Book a free strategy call. We will map your goals, identify the
            fastest path to consistent clients, and recommend the right system
            for your business.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-muted/50 tracking-wide">
            <span>15-minute session</span>
            <span className="text-border">|</span>
            <span>No sales pitch</span>
            <span className="text-border">|</span>
            <span>Actionable advice</span>
          </div>

          {/* CTA — mailto as fallback, swap href for Calendly when ready */}
          <a
            href="mailto:hello@aiagencysystem.com?subject=Strategy%20Call%20Request&body=Hi%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.%20Here%27s%20a%20bit%20about%20my%20business%3A%0A%0A"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-10 py-4 text-sm font-bold text-white tracking-wide transition-all hover:bg-accent-light hover:shadow-lg"
          >
            Book Free Strategy Call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
