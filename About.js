"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "CGPA", value: "8.02 / 10" },
  { label: "Datasets analyzed", value: "3+" },
  { label: "Core stack", value: "Python · SQL · Pandas" },
  { label: "Graduating", value: "2027" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-token px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal"
        >
          About
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              I treat every dataset as a question
              <br />
              that hasn&apos;t been asked yet.
            </h2>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted-token sm:text-lg">
              I&apos;m a third-year Data Science student at Anil Neerukonda
              Institute of Technology &amp; Sciences (ANITS), building a
              practical foundation across the full analytics workflow —
              cleaning messy real-world data, exploring it for patterns, and
              packaging the findings into visuals that someone outside the
              dataset can actually act on.
            </p>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-token sm:text-lg">
              My recent focus has been on EDA-driven projects with Pandas and
              Matplotlib, alongside structured training through Internshala
              and Kodacy. I&apos;m now sharpening DSA and SQL fundamentals to
              round out the analyst-to-data-scientist pipeline, and actively
              looking for an internship where I can apply that to a live
              product or business problem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-token bg-surface-token p-5 transition-colors hover:border-signal/50"
              >
                <p className="font-display text-xl font-semibold sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-token">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
