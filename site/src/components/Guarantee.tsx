"use client";

import { motion } from "motion/react";

export default function Guarantee() {
  return (
    <section className="relative px-6 py-20 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-2xl border border-accent/15 bg-accent/[0.02] p-8 sm:p-10 text-center">
          {/* Shield icon */}
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/[0.08] border border-accent/15">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-3">
            Zero-risk investment
          </h3>

          <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
            You get the complete system, full source code, and all documentation the moment you pay.
            No drip-feeding, no locked content, no hidden upsells.
            If the system isn&apos;t what we described, reach out and we&apos;ll make it right.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-muted-dim tracking-wide">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Full source code ownership
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Instant full access
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              No recurring charges
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
