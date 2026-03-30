"use client";

import { motion } from "motion/react";

const rows = [
  { capability: "Code Writing", others: "Slow, manual", you: "AI-generated in seconds" },
  { capability: "Marketing", others: "Hire an agency", you: "Built-in AI engine" },
  { capability: "Planning", others: "Spreadsheets", you: "Structured AI workflows" },
  { capability: "SEO", others: "Expensive consultants", you: "Automated audits" },
  { capability: "Copywriting", others: "Freelancers", you: "On-demand AI copy" },
  { capability: "Competitive Intel", others: "Manual research", you: "AI analysis in minutes" },
];

export default function SystemStatus() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          All systems operational
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Your system is fully ready
        </h1>
        <p className="mt-3 text-muted">
          Every capability is online and powered by AI.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="overflow-hidden rounded-2xl border border-border"
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="px-6 py-4 font-semibold">Capability</th>
              <th className="px-6 py-4 font-semibold text-muted">Most People</th>
              <th className="px-6 py-4 font-semibold text-accent-light">You</th>
              <th className="px-6 py-4 font-semibold text-right">Status</th>
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
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
