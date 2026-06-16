"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, TrendingUp } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Netflix Content Analytics Dashboard",
    tagline: "What does Netflix actually keep making more of?",
    description:
      "End-to-end EDA on a 8,800-title Netflix catalog dataset. Cleaned inconsistent date, country, and duration fields, then explored genre mix and content growth over time to surface where the platform's catalog strategy was shifting.",
    metrics: [
      { label: "Titles analyzed", value: "8,800+" },
      { label: "Genres compared", value: "15+" },
      { label: "Years of trend data", value: "10" },
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    href: "https://github.com/potnuruteja115",
  },
  {
    icon: TrendingUp,
    title: "Vehicle Sales Trend Analysis — ABG Motors",
    tagline: "Finding which vehicle categories actually drive revenue.",
    description:
      "Analyzed a multi-category vehicle sales dataset to rank categories by revenue contribution and identify seasonal demand swings. Built cleaning pipelines in Pandas to handle missing prices and inconsistent category labels, then visualized findings for a business-facing summary.",
    metrics: [
      { label: "Revenue lift in top category", value: "~18%" },
      { label: "Records cleaned", value: "5,000+" },
      { label: "Vehicle categories ranked", value: "6" },
    ],
    stack: ["Python", "Pandas", "Data Cleaning", "Visualization"],
    href: "https://github.com/potnuruteja115",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-token px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal"
        >
          Featured work
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Two datasets, two stories.
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col rounded-2xl border border-token bg-surface-token p-7 transition-all hover:-translate-y-1 hover:border-signal/50 hover:shadow-xl hover:shadow-signal/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-token transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 font-mono text-sm text-coral">{p.tagline}</p>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-token sm:text-base">
                  {p.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-y border-token py-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-lg font-semibold sm:text-xl">
                        {m.value}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-wider text-muted-token sm:text-[11px]">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-token px-3 py-1 font-mono text-[11px] text-muted-token"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

