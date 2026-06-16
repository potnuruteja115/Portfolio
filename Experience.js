"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "AI & ML Intern",
    org: "Kodacy (Virtual Internship)",
    period: "2024",
    points: [
      "Built foundational fluency in AI and ML concepts through applied Python exercises.",
      "Translated theoretical ML workflows into working code, from data prep to basic model evaluation.",
    ],
  },
  {
    role: "Data Science Trainee",
    org: "Internshala Trainings",
    period: "2024",
    points: [
      "Completed a structured Data Science with AI program covering Python, statistics, and the EDA workflow.",
      "Delivered multiple mini-projects applying Pandas and visualization libraries to real datasets, forming the basis for later portfolio work.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-token px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal"
        >
          Experience
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Building the fundamentals.
        </motion.h2>

        <div className="mt-12 space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid gap-4 border-b border-token pb-8 last:border-none md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-display text-lg font-semibold">{e.role}</p>
                <p className="mt-1 font-mono text-sm text-coral">{e.org}</p>
                <p className="mt-1 font-mono text-xs text-muted-token">
                  {e.period}
                </p>
              </div>
              <ul className="space-y-2">
                {e.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-3 font-body text-sm leading-relaxed text-muted-token sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
