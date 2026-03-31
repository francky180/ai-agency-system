"use client";

import { motion } from "motion/react";

const comparisons = [
  { task: "Agency website", old: "Hire a developer — $3,000+", you: "Built-in and ready" },
  { task: "Marketing strategy", old: "Hire a consultant — $2,000+/mo", you: "AI engine included" },
  { task: "SEO & content", old: "Agency retainer — $1,500+/mo", you: "Automated audits" },
  { task: "Copywriting", old: "Freelancer — $500+ per project", you: "AI-generated on demand" },
  { task: "Automation", old: "Custom dev — $5,000+", you: "Pre-built workflows" },
  { task: "Client systems", old: "Months of setup", you: "Ready in 30 minutes" },
];

export default function ValueBridge() {
  return (
    <section className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">The Real Cost</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Save $12,000+ on agency setup.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-3xl"
      >
        <div className="overflow-hidden rounded-2xl border border-border">
          {/* Header */}
          <div className="grid grid-cols-3 bg-card px-6 py-4 border-b border-border">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted/60">Task</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted/60">Traditional Cost</span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">With This System</span>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.task}
              className={`grid grid-cols-3 px-6 py-4 ${
                i < comparisons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm font-medium">{row.task}</span>
              <span className="text-sm text-muted/60 line-through decoration-muted/30">{row.old}</span>
              <span className="text-sm font-medium text-accent">{row.you}</span>
            </div>
          ))}

          {/* Total */}
          <div className="grid grid-cols-3 px-6 py-5 bg-accent/[0.04] border-t border-accent/10">
            <span className="text-sm font-bold">Total value</span>
            <span className="text-sm font-bold text-muted/60">$12,000+</span>
            <span className="text-sm font-bold text-accent">From $250</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
