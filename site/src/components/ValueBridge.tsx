"use client";

import { motion } from "motion/react";

const comparisons = [
  { task: "Agency website", old: "$3,000+", oldDetail: "Hire a developer", you: "Built-in and ready" },
  { task: "Marketing strategy", old: "$2,000+/mo", oldDetail: "Hire a consultant", you: "AI engine included" },
  { task: "SEO & content", old: "$1,500+/mo", oldDetail: "Agency retainer", you: "Automated audits" },
  { task: "Copywriting", old: "$500+", oldDetail: "Per project freelancer", you: "AI-generated on demand" },
  { task: "Automation", old: "$5,000+", oldDetail: "Custom development", you: "Pre-built workflows" },
  { task: "Client systems", old: "Months", oldDetail: "Of manual setup", you: "Ready in days" },
];

export default function ValueBridge() {
  return (
    <section id="value" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">The Real Cost</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          Replace $12,000+ in agency costs.
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted text-lg">
          Everything you need to acquire clients — for a fraction of what agencies charge.
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
        <div className="hidden sm:block overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-3 bg-surface px-6 py-4 border-b border-border">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted/60">What You Need</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted/60">Traditional Cost</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">With ClientFlow</span>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={row.task}
              className={`grid grid-cols-3 px-6 py-4 ${
                i < comparisons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm font-medium text-foreground">{row.task}</span>
              <span className="text-sm text-muted/60 line-through decoration-muted/30">{row.oldDetail} — {row.old}</span>
              <span className="text-sm font-medium text-accent">{row.you}</span>
            </div>
          ))}

          <div className="grid grid-cols-3 px-6 py-5 bg-accent/[0.04] border-t border-accent/10">
            <span className="text-sm font-bold text-foreground">Total value</span>
            <span className="text-sm font-bold text-muted/60">$12,000+</span>
            <span className="text-sm font-bold text-accent">From $250</span>
          </div>
        </div>

        {/* Mobile card layout */}
        <div className="sm:hidden space-y-3">
          {comparisons.map((row) => (
            <div key={row.task} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-medium mb-2 text-foreground">{row.task}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted/60 line-through">{row.old}</span>
                <span className="text-sm font-bold text-accent">{row.you}</span>
              </div>
            </div>
          ))}
          <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-foreground">Total value</span>
              <div className="text-right">
                <span className="text-sm text-muted/60 line-through mr-3">$12,000+</span>
                <span className="text-sm font-bold text-accent">From $250</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
