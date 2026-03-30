"use client";

import { motion } from "motion/react";

const stats = [
  { value: "100%", label: "AI-Powered", sub: "No manual bottlenecks" },
  { value: "6", label: "Core Systems", sub: "Website, marketing, automation & more" },
  { value: "$0", label: "Monthly Fees", sub: "One-time payment, lifetime access" },
  { value: "30min", label: "To Launch", sub: "From purchase to running agency" },
];

export default function SocialProof() {
  return (
    <section className="relative px-6 py-20 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <p className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase text-foreground/80">{stat.label}</p>
            <p className="mt-1 text-[11px] text-muted/60 leading-tight">{stat.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
