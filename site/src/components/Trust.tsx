"use client";

import { motion } from "motion/react";

const proofs = [
  { stat: "100%", label: "AI-powered — no manual bottlenecks" },
  { stat: "< 30 min", label: "From zero to running agency system" },
  { stat: "All-in-one", label: "Website + Marketing + Automation" },
];

export default function Trust() {
  return (
    <section className="px-6 py-28 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Built for results
      </motion.h2>

      <div className="mt-14 grid max-w-3xl gap-8 sm:grid-cols-3">
        {proofs.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
          >
            <span className="text-4xl font-bold text-accent-light">
              {item.stat}
            </span>
            <p className="mt-3 text-sm text-muted">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
