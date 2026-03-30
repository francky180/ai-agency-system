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
            <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-card px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted">
              <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              By Application Only
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help scaling faster?
          </h2>

          <p className="mt-5 max-w-md mx-auto text-muted leading-relaxed">
            If you are already running an agency or business and want a custom implementation —
            a strategy call is the fastest path. We will map your goals, identify leverage points,
            and build a plan to scale.
          </p>

          <p className="mt-4 text-sm text-muted/60">
            Limited availability. Serious inquiries only.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-dim px-10 py-4 text-sm font-semibold text-accent-light transition-all hover:border-accent/60 hover:bg-accent/10 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
          >
            Book a Strategy Call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
