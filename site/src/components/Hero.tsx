"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32">
      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <span className="mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted">
          AI-Powered Agency System
        </span>

        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Build &amp; run your agency
          <br />
          <span className="text-accent-light">with AI.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          A complete, production-ready system that gives you the website,
          marketing engine, automation workflows, and structured build
          process — all in one package.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#cta"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
          >
            Get the System
          </a>
          <a
            href="#what-this-is"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-muted"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
