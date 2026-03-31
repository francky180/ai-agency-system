"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "We Deploy Your System",
    desc: "Within 24 hours, your full client acquisition stack is live — website, lead capture, outreach sequences, and automation workflows. Production-ready, not a template.",
    metric: "Day 1",
    metricLabel: "system live",
  },
  {
    num: "02",
    title: "Leads Start Coming In",
    desc: "Your AI marketing engine generates targeted content, runs SEO analysis, and builds outreach sequences. Leads find you through search, social, and direct outreach.",
    metric: "7–14 days",
    metricLabel: "first leads",
  },
  {
    num: "03",
    title: "You Close & Scale",
    desc: "Focus on what you're best at — closing deals and delivering great work. The system keeps generating leads while you grow your revenue.",
    metric: "Ongoing",
    metricLabel: "compounding growth",
  },
];

export default function ThreeSteps() {
  return (
    <section id="how-it-works" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">How It Works</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          From zero to clients in three steps.
        </h2>
        <p className="mt-4 text-muted max-w-md mx-auto">
          No hiring. No months of setup. No guesswork.
        </p>
      </motion.div>

      <div className="relative z-10 grid w-full max-w-5xl gap-6 sm:grid-cols-3">
        {/* Connecting line (desktop only) */}
        <div className="hidden sm:block absolute top-[4.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-border via-accent/20 to-border z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative z-10 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent font-mono border border-accent/20">
                {step.num}
              </span>
              <div className="text-right">
                <p className="text-lg font-bold text-accent leading-none">{step.metric}</p>
                <p className="text-[10px] text-muted-dim mt-0.5">{step.metricLabel}</p>
              </div>
            </div>

            <h3 className="text-base font-bold mb-3 text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
