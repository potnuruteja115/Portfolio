"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal"
          >
            Data Science · B.Tech &apos;27
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Turning raw data
            <br />
            into{" "}
            <span className="relative inline-block">
              decisions
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-3 w-full text-coral"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 50 2, 150 12, 198 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg font-body text-base text-muted-token sm:text-lg"
          >
            I&apos;m Potnuru Teja — a Data Science undergrad who finds the
            story hiding in messy datasets. Python, SQL, and Pandas are my
            tools; clean visuals and clear insights are the output.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-105"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-token px-6 py-3 font-mono text-sm font-medium transition-colors hover:border-signal hover:text-signal"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-5 text-muted-token"
          >
            <a
              href="https://github.com/potnuruteja115"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-signal"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/potnuruteja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-signal"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:potnuruteja15@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-signal"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: signature self-drawing chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl border border-token bg-surface-token p-6 shadow-2xl shadow-black/20"
        >
          <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted-token">
            <span>content_growth.ipynb</span>
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate/40" />
            </span>
          </div>

          <svg viewBox="0 0 400 220" className="w-full">
            {/* Axes */}
            <line x1="30" y1="10" x2="30" y2="190" stroke="var(--border)" strokeWidth="1" />
            <line x1="30" y1="190" x2="380" y2="190" stroke="var(--border)" strokeWidth="1" />

            {/* Gridlines */}
            {[40, 90, 140].map((y) => (
              <line key={y} x1="30" y1={y} x2="380" y2={y} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" />
            ))}

            {/* Bars representing genre distribution */}
            {[
              { x: 50, h: 70, color: "#5EE6C5" },
              { x: 95, h: 110, color: "#5EE6C5" },
              { x: 140, h: 50, color: "#5EE6C5" },
              { x: 185, h: 130, color: "#5EE6C5" },
              { x: 230, h: 85, color: "#5EE6C5" },
              { x: 275, h: 60, color: "#5EE6C5" },
            ].map((bar, i) => (
              <motion.rect
                key={bar.x}
                x={bar.x}
                width="28"
                fill={bar.color}
                opacity="0.18"
                y={190 - bar.h}
                height={bar.h}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: "190px 190px" }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: "easeOut" }}
              />
            ))}

            {/* Self-drawing trend line */}
            <motion.path
              d="M 30 160 L 80 130 L 130 145 L 180 90 L 230 100 L 280 60 L 330 70 L 375 35"
              fill="none"
              stroke="#FF8A5B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="500"
              initial={{ strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Trend line points */}
            {[
              { x: 30, y: 160 },
              { x: 80, y: 130 },
              { x: 130, y: 145 },
              { x: 180, y: 90 },
              { x: 230, y: 100 },
              { x: 280, y: 60 },
              { x: 330, y: 70 },
              { x: 375, y: 35 },
            ].map((p, i) => (
              <motion.circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="3.5"
                fill="#FF8A5B"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.18 }}
              />
            ))}
          </svg>

          <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-muted-token">
            <span>2018</span>
            <span>2019</span>
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
          </div>

          <div className="mt-4 flex items-center gap-2 font-mono text-xs text-signal">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-signal" />
            df.groupby(&apos;genre&apos;).size().plot()
            <span className="inline-block h-3 w-[2px] animate-blink bg-signal" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-token transition-colors hover:text-signal"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

