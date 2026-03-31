"use client";

import { motion } from "motion/react";

export default function BookCall() {
  return (
    <section id="book-call" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-2xl border border-border bg-surface p-10 sm:p-14 text-center">
          {/* Exclusive badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-card px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              Limited Availability
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Want a custom implementation?
          </h2>

          <p className="mt-5 max-w-md mx-auto text-muted leading-relaxed">
            Already running an agency or business? Book a strategy call and
            we will map your goals, identify the highest-leverage moves, and
            build a custom plan to scale — fast.
          </p>

          <p className="mt-4 text-xs text-muted/40">
            Serious inquiries only. Not a sales pitch — it is a working session.
          </p>

          <a
            href="mailto:hello@aiagencysystem.com?subject=Strategy%20Call%20Request&body=Hi%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.%20Here%27s%20a%20bit%20about%20my%20business%3A%0A%0A"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.06] px-10 py-4 text-sm font-bold text-accent tracking-wide transition-all hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_40px_rgba(201,168,76,0.12)]"
          >
            Book a Free Strategy Call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
