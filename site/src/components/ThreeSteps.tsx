"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Access the System",
    desc: "Get instant access to the full AI agency infrastructure — website, marketing engine, and automation workflows.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Follow the Process",
    desc: "Walk through the step-by-step guide. Install, configure, and launch — everything is documented and beginner-friendly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Scale Results",
    desc: "Deploy your agency, close clients, and let AI handle the execution. The system compounds — every project gets faster.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function ThreeSteps() {
  return (
    <section className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-dim to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">How It Works</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Three steps to your agency.
        </h2>
      </motion.div>

      <div className="relative z-10 mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:bg-card-hover"
          >
            {/* Step number */}
            <div className="flex items-center gap-4 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-accent-dim text-accent">
                {step.icon}
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-accent/40">
                STEP {step.num}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{step.desc}</p>

            {/* Connector line (hidden on last) */}
            {i < steps.length - 1 && (
              <div className="hidden sm:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-border-light to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
