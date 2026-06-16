"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setLight(true);
    }
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    if (next) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-token text-current transition-colors hover:border-signal hover:text-signal"
    >
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}

