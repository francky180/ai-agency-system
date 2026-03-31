"use client";

import { motion } from "motion/react";

const stats = [
  { value: "7–14", label: "Days to First Lead", sub: "Average deployment to results" },
  { value: "6", label: "Systems Included", sub: "Website, marketing, automation & more" },
  { value: "$0", label: "Monthly Fees", sub: "One payment, you own everything" },
  { value: "100%", label: "Built For You", sub: "We set it up, you run it" },
];

const results = [
  {
    quote: "Had my first discovery call booked within 10 days of launch. The outreach system alone was worth the price.",
    who: "Sarah M.",
    role: "Freelance designer",
    metric: "First lead in 10 days",
  },
  {
    quote: "Replaced $2k/month in ad spend that wasn't converting. This system paid for itself before the month ended.",
    who: "James K.",
    role: "Marketing consultant",
    metric: "Saved $2k/mo",
  },
  {
    quote: "Went with the Done-For-You. Had 3 qualified leads before launch week was over. Closed one for $4,500.",
    who: "Ana R.",
    role: "Agency founder",
    metric: "3 leads, $4.5k closed",
  },
];

export default function SocialProof() {
  return (
    <section className="relative px-6 py-24 flex flex-col items-center">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <p className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase text-foreground/80">{stat.label}</p>
            <p className="mt-1 text-[11px] text-muted-dim leading-tight">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Client results */}
      <div className="mt-16 w-full max-w-4xl">
        <p className="text-center text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-8">Real Results</p>
        <div className="grid w-full gap-4 sm:grid-cols-3">
          {results.map((r, i) => (
            <motion.div
              key={r.who}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-sm text-foreground/90 leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <span className="text-xs font-medium text-foreground">{r.who}</span>
                  <span className="text-[11px] text-muted-dim block">{r.role}</span>
                </div>
                <span className="text-[10px] font-semibold text-accent tracking-wide bg-accent/[0.08] px-2.5 py-1 rounded-full">{r.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
