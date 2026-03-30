"use client";

import { motion } from "motion/react";

export default function WhatThisIs() {
  return (
    <section
      id="what-this-is"
      className="relative px-6 py-28 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What this system is
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          This is not a course. Not a template. Not a collection of prompts.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          It is a <span className="text-foreground font-semibold">complete, working system</span>{" "}
          — pre-built, pre-configured, and ready to deploy — that turns you
          into an AI-powered agency from day one.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-16 grid max-w-4xl gap-6 sm:grid-cols-3"
      >
        {[
          {
            title: "Not a template",
            desc: "A fully integrated system with website, marketing, and automation built in.",
          },
          {
            title: "Not a course",
            desc: "No watching. No studying. Open the system, follow the guide, and launch.",
          },
          {
            title: "Not just prompts",
            desc: "Real infrastructure — real workflows — real output. Powered by AI at every layer.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-card-hover"
          >
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
