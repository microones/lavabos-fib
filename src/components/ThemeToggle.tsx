"use client";

import { useSyncExternalStore } from "react";

type Theme = "fib" | "organic";

// El tema viu a <html data-theme>, que layout.tsx posa abans de pintar a partir de localStorage.
const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "organic" ? "organic" : "fib");
const getServerTheme = (): Theme => "fib";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = () => {
    const next: Theme = theme === "fib" ? "organic" : "fib";
    try { localStorage.setItem("theme", next); } catch {}
    document.documentElement.dataset.theme = next;
    listeners.forEach((cb) => cb());
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 border border-[var(--border)] bg-[var(--card-bg)] text-[var(--muted)] px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-200 hover:border-[var(--primary)] hover:text-[var(--fg)] cursor-pointer"
      title={`Tema actual: ${theme === "fib" ? "FIB" : "ORGANIC"}. Clic per canviar.`}
    >
      <span
        className="inline-block w-2 h-2 border border-current"
        style={{ backgroundColor: "var(--primary)" }}
      />
      {theme === "fib" ? "FIB" : "ORGANIC"}
    </button>
  );
}
