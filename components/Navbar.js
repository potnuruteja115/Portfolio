"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-token bg-ink/80 backdrop-blur-md transition-colors duration-300 dark:bg-ink/80 light:bg-paper/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          PT<span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm text-muted-token md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline hover:text-current">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-signal px-4 py-2 font-mono text-xs font-medium text-ink transition-transform hover:scale-105 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-token md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-token px-6 py-4 font-body text-sm text-muted-token md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-current"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

