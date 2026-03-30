"use client";

import { motion } from "motion/react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative px-6 py-28 flex flex-col items-center"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex max-w-xl flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to build your agency?
        </h2>
        <p className="mt-4 text-lg text-muted">
          Get the complete system — website, marketing engine, automation
          workflows, and step-by-step guide. Everything you need to launch.
        </p>
        <a
          href="#"
          className="mt-8 rounded-full bg-accent px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
        >
          Get the System Now
        </a>
      </motion.div>
    </section>
  );
}
