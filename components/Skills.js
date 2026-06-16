"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages & Querying",
    items: ["Python", "SQL", "MySQL"],
  },
  {
    title: "Analysis & Visualization",
    items: ["Pandas", "NumPy", "Matplotlib", "Excel", "Power BI"],
  },
  {
    title: "Tools & Workflow",
    items: ["Jupyter Notebook", "Git", "GitHub"],
  },
  {
    title: "Certifications",
    items: [
      "Python — HackerRank",
      "Data Science with AI — Internshala",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-token px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal"
        >
          Skills
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          The toolkit.
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-token bg-surface-token p-6"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-coral">
                {g.title}
              </p>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm text-muted-token transition-colors hover:text-current sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-token bg-surface-token p-6"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-coral">
            Languages spoken
          </p>
          <p className="mt-3 font-body text-sm text-muted-token sm:text-base">
            English (full proficiency) · Telugu (full proficiency) · Hindi
            (limited proficiency)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

