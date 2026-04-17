"use client";

import { useEffect, useState } from "react";

type Theme = "fib" | "organic";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("fib");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "fib";
    setTheme(stored);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "fib" ? "organic" : "fib";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 border border-[var(--border)] bg-[var(--card-bg)] text-[var(--muted)] px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-200 hover:border-[var(--primary)] hover:text-[var(--fg)] cursor-pointer"
      title={`Tema actual: ${theme === "fib" ? "FIB" : "ORGANIC"}. Clic per canviar.`}
    >
      <span
        className="inline-block w-2 h-2 border border-current"
        style={{ backgroundColor: theme === "fib" ? "var(--primary)" : "var(--primary)" }}
      />
      {theme === "fib" ? "FIB" : "ORGANIC"}
    </button>
  );
}
