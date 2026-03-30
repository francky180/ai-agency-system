"use client";

import { motion } from "motion/react";

const rows = [
  { capability: "Code Writing", others: "Manual or outsourced", you: "AI-generated in seconds" },
  { capability: "Marketing", others: "Hire an agency", you: "Built-in AI marketing engine" },
  { capability: "Planning", others: "Spreadsheets & guesswork", you: "Structured AI workflows" },
  { capability: "SEO", others: "Expensive consultants", you: "Automated audits & optimization" },
  { capability: "Copywriting", others: "Freelancers & delays", you: "On-demand AI copy generation" },
  { capability: "Competitive Intel", others: "Manual research", you: "AI-powered analysis in minutes" },
];

export default function SystemComparison() {
  return (
    <section className="px-6 py-28 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        The difference
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-14 w-full max-w-3xl overflow-hidden rounded-2xl border border-border"
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="px-6 py-4 font-semibold">Capability</th>
              <th className="px-6 py-4 font-semibold text-muted">Most People</th>
              <th className="px-6 py-4 font-semibold text-accent-light">You</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.capability}
                className={i < rows.length - 1 ? "border-b border-border" : ""}
              >
                <td className="px-6 py-4 font-medium">{row.capability}</td>
                <td className="px-6 py-4 text-muted">{row.others}</td>
                <td className="px-6 py-4 text-accent-light">{row.you}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
