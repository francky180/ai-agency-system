"use client";

import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="px-6 py-32 flex flex-col items-center border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-md text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Stop building from scratch.
        </h2>
        <p className="mt-4 text-muted">
          The system is ready. Your agency is waiting.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
        >
          Start Now
        </a>
        <p className="mt-6 text-xs text-muted">
          One-time purchase. Full system access. No subscriptions.
        </p>
      </motion.div>
    </section>
  );
}
