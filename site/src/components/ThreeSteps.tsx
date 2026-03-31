"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "We Build Your System",
    desc: "Get instant access to your complete client acquisition infrastructure — website, marketing engine, and automation workflows. All production-ready.",
    metric: "Day 1",
    metricLabel: "system live",
  },
  {
    num: "02",
    title: "Attract Qualified Leads",
    desc: "Your AI marketing engine generates content, runs SEO audits, and creates outreach sequences that bring leads to you — on autopilot.",
    metric: "7–14 days",
    metricLabel: "first leads",
  },
  {
    num: "03",
    title: "Close and Scale",
    desc: "Focus on what you do best — closing deals and delivering results. The system handles lead generation so you can scale predictably.",
    metric: "Ongoing",
    metricLabel: "client flow",
  },
];

export default function ThreeSteps() {
  return (
    <section id="how-it-works" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">How It Works</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          Three steps to consistent clients.
        </h2>
        <p className="mt-4 text-muted max-w-md mx-auto">
          From zero to a working client acquisition system — without the complexity.
        </p>
      </motion.div>

      <div className="relative z-10 grid w-full max-w-5xl gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent font-mono">
                {step.num}
              </span>
              <div className="text-right">
                <p className="text-lg font-bold text-accent leading-none">{step.metric}</p>
                <p className="text-[10px] text-muted/60 mt-0.5">{step.metricLabel}</p>
              </div>
            </div>

            <h3 className="text-base font-bold mb-2 text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
