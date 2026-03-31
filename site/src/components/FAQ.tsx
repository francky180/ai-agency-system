"use client";

import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    q: "What exactly do I get?",
    a: "A complete client acquisition system — premium website built to convert, AI marketing engine (SEO, copy, social, email, competitor analysis), automation workflows, and a step-by-step strategy to start landing clients. Everything is production-ready.",
  },
  {
    q: "How fast will I start getting clients?",
    a: "Most users have their system live within a day. With the marketing engine and outreach strategy included, you can start generating leads within 7–14 days. The speed depends on your niche and how quickly you deploy.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. Basic comfort with a computer is enough. The guide walks you through every step. If you can follow instructions, you can launch your system.",
  },
  {
    q: "What is the difference between $250 and $1,500?",
    a: "The $250 Core System gives you the complete infrastructure to launch on your own. The $1,500 Done-For-You includes everything in Core plus custom branding, deployed campaigns, tailored automation, priority support, and hands-on launch assistance.",
  },
  {
    q: "Is this a subscription?",
    a: "No. One-time payment, lifetime access. No monthly fees, no hidden charges, no upsell traps. You own the system.",
  },
  {
    q: "Can I customize it for my niche?",
    a: "Yes. Everything is modular — swap colors, update copy, add sections, change branding. The code is clean and well-documented. With the $1,500 plan, we customize it for you.",
  },
  {
    q: "What if I get stuck?",
    a: "The Core System includes full documentation and a launch guide. The Done-For-You plan ($1,500) includes priority support and direct onboarding — we help you get running personally.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium pr-4 text-foreground">{q}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative px-6 py-28 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">Questions</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          Frequently asked questions.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-2xl"
      >
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </motion.div>
    </section>
  );
}
