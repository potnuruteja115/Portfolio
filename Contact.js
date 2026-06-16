"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Check } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const email = form.email.value;

    // No-backend fallback: opens the user's mail client pre-filled.
    // To enable a true serverless submit, replace this handler with a
    // POST to a form endpoint (e.g. Web3Forms / Formspree) — no other
    // changes needed.
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:potnuruteja15@gmail.com?subject=${subject}&body=${body}`;

    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="border-t border-token px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal"
        >
          Contact
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Open to Data Analyst &amp;<br />Data Science internships.
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted-token sm:text-lg">
              If you&apos;re looking for someone who enjoys digging into
              datasets, asking the next question, and turning it into a
              clear chart — I&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex flex-col gap-4 font-mono text-sm">
              <a
                href="mailto:potnuruteja15@gmail.com"
                className="flex items-center gap-3 text-muted-token transition-colors hover:text-signal"
              >
                <Mail size={18} /> potnuruteja15@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/potnuruteja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-token transition-colors hover:text-signal"
              >
                <Linkedin size={18} /> linkedin.com/in/potnuruteja
              </a>
              <a
                href="https://github.com/potnuruteja115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-token transition-colors hover:text-signal"
              >
                <Github size={18} /> github.com/potnuruteja115
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 rounded-2xl border border-token bg-surface-token p-7"
          >
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-token">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-token bg-transparent px-4 py-3 font-body text-sm outline-none transition-colors focus:border-signal"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-token">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-token bg-transparent px-4 py-3 font-body text-sm outline-none transition-colors focus:border-signal"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-token">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none rounded-lg border border-token bg-transparent px-4 py-3 font-body text-sm outline-none transition-colors focus:border-signal"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              {status === "sent" ? (
                <>
                  <Check size={16} /> Opening your mail app...
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>
            <p className="text-center font-mono text-[11px] text-muted-token">
              Opens your email client with the message pre-filled.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
