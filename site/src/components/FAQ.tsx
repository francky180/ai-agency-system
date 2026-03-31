"use client";

import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    q: "What exactly do I get for $250?",
    a: "A production-ready client acquisition system: custom-designed website, AI marketing engine (SEO audits, copy generation, social content, email sequences, competitor analysis), automation workflows, outreach playbook with scripts and KPIs, system dashboard, and step-by-step documentation. Everything is deployed and ready to use.",
  },
  {
    q: "How realistic is the 7–14 day timeline?",
    a: "Your system is live within 24 hours. The 7–14 day timeline refers to generating your first inbound leads using the included outreach strategy. The actual speed depends on your niche and how consistently you execute the playbook. Some clients see results faster, some take a few weeks.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. If you can follow written instructions, you can launch this system. The documentation walks through every step. The $1,500 plan includes hands-on setup where we do it with you.",
  },
  {
    q: "What's the difference between Core ($250) and Done-For-You ($1,500)?",
    a: "Core gives you the complete system to launch yourself — all tools, all documentation. Done-For-You includes everything in Core, plus: custom branding, deployed marketing campaigns, tailored automation, priority support, revenue optimization playbook, and full deployment assistance. We launch it with you, not just for you.",
  },
  {
    q: "Is there a monthly subscription?",
    a: "No. One payment, lifetime access. You own the entire system — code, content, documentation, everything. No hidden fees, no renewals, no upsell traps.",
  },
  {
    q: "Can I customize this for my specific niche?",
    a: "Yes. The system is built to be modular — update copy, swap colors, add sections, change branding. The code is clean and documented. With the $1,500 plan, we customize everything to your niche and ideal client profile before launch.",
  },
  {
    q: "What if I need help after purchasing?",
    a: "Core includes full documentation and a detailed launch guide. Done-For-You ($1,500) includes priority support — direct access to the team for onboarding, troubleshooting, and optimization guidance.",
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
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">Questions</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          Common questions, straight answers.
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
