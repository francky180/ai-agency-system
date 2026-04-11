"use client";

import { motion } from "motion/react";
import { LINKS } from "@/lib/links";

export default function BookCall() {
  return (
    <section id="book-call" className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-2xl border border-border bg-card p-10 sm:p-14 text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              Free — No Obligation
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Not sure which plan fits?
          </h2>

          <p className="mt-5 max-w-md mx-auto text-muted leading-relaxed">
            Book a free 15-minute strategy call. We&apos;ll map your business goals,
            identify your fastest path to clients, and recommend the right system
            for where you are now.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-muted-dim tracking-wide">
              <span>15-minute session</span>
              <span className="text-border-light">|</span>
              <span>Zero sales pressure</span>
              <span className="text-border-light">|</span>
              <span>Actionable takeaways</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-sm">
              {["Custom growth plan", "Niche-specific advice", "System walkthrough"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.04] px-3 py-1 text-[10px] font-medium text-accent tracking-wide">
                  <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-10 py-4 text-sm font-bold text-background tracking-wide transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
          >
            Book Free Strategy Call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
