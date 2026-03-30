"use client";

import { motion } from "motion/react";

const steps = [
  { num: "01", title: "Install", desc: "Set up Node, Git, and Claude CLI." },
  { num: "02", title: "Setup", desc: "Clone the system and install dependencies." },
  { num: "03", title: "Run", desc: "Start the system and verify all subsystems." },
  { num: "04", title: "Launch", desc: "Deploy your agency and start delivering." },
];

export default function Process() {
  return (
    <section className="px-6 py-28 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        How it works
      </motion.h2>

      <div className="mt-16 flex max-w-3xl flex-col gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="flex items-start gap-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border font-mono text-sm font-bold text-accent-light">
              {step.num}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
