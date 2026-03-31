"use client";

import { motion } from "motion/react";

const comparisons = [
  { task: "Agency website", old: "$3,000–5,000", oldDetail: "Web developer", you: "Included" },
  { task: "Marketing strategy", old: "$2,000+/mo", oldDetail: "Marketing agency", you: "Included" },
  { task: "SEO & content system", old: "$1,500+/mo", oldDetail: "SEO retainer", you: "Included" },
  { task: "Sales copywriting", old: "$500–2,000", oldDetail: "Per project", you: "Included" },
  { task: "Automation setup", old: "$3,000–5,000", oldDetail: "Custom dev", you: "Included" },
  { task: "Outreach sequences", old: "$1,000+/mo", oldDetail: "SDR or agency", you: "Included" },
];

export default function ValueBridge() {
  return (
    <section id="value" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">The Math</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          What this would cost you separately.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          Six systems. One payment. No retainers, no contracts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-3xl"
      >
        {/* Desktop table */}
        <div className="hidden sm:block overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-3 bg-surface px-6 py-4 border-b border-border">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-dim">System</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-dim">Typical Cost</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">ClientFlow</span>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={row.task}
              className={`grid grid-cols-3 px-6 py-4 ${
                i < comparisons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm font-medium text-foreground">{row.task}</span>
              <div className="flex flex-col">
                <span className="text-sm text-muted-dim line-through decoration-muted-dim/30">{row.old}</span>
                <span className="text-[10px] text-muted-dim/60">{row.oldDetail}</span>
              </div>
              <span className="text-sm font-medium text-accent flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {row.you}
              </span>
            </div>
          ))}

          <div className="grid grid-cols-3 px-6 py-5 bg-accent/[0.04] border-t border-accent/10">
            <span className="text-sm font-bold text-foreground">Total</span>
            <span className="text-sm font-bold text-muted-dim">$11,000–$20,000+</span>
            <span className="text-sm font-bold text-accent">From $250</span>
          </div>
        </div>

        {/* Mobile card layout */}
        <div className="sm:hidden space-y-3">
          {comparisons.map((row) => (
            <div key={row.task} className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium mb-2 text-foreground">{row.task}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-dim line-through">{row.old}</span>
                <span className="text-sm font-bold text-accent flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {row.you}
                </span>
              </div>
            </div>
          ))}
          <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-foreground">Total value</span>
              <div className="text-right">
                <span className="text-sm text-muted-dim line-through mr-3">$11,000+</span>
                <span className="text-sm font-bold text-accent">From $250</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
