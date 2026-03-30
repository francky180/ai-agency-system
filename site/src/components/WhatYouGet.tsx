"use client";

import { motion } from "motion/react";

const items = [
  {
    label: "Agency Website",
    desc: "Premium, high-converting website built with Next.js and Tailwind — ready to deploy.",
  },
  {
    label: "AI Marketing Engine",
    desc: "SEO audits, copy generation, social calendars, email sequences, competitor analysis — all AI-powered.",
  },
  {
    label: "Automation Workflows",
    desc: "Structured processes for every part of running your agency, automated from end to end.",
  },
  {
    label: "Client Package",
    desc: "A step-by-step onboarding guide so you can set up, run, and verify the entire system.",
  },
  {
    label: "System Status Dashboard",
    desc: "Real-time verification that every subsystem is online, healthy, and ready.",
  },
  {
    label: "Full Documentation",
    desc: "Clean, beginner-friendly docs covering setup, configuration, and daily operation.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="px-6 py-28 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        What you get
      </motion.h2>

      <div className="mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-card-hover"
          >
            <h3 className="text-sm font-semibold tracking-wide uppercase text-accent-light">
              {item.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
