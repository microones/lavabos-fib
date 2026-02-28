"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    /* Canvi clau: afegim 'glass-card' i 'border-b'. 
      Això crea la separació visual quan fas scroll.
    */
    <header className="sticky top-0 z-50 w-full glass-card border-x-0 border-t-0 border-b border-white/10 transition-colors duration-300 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo i Títol */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/img/logo_lavabos-fib.png"
            alt="Lavabos FIB Logo"
            width={32}
            height={32}
            className="priority group-hover:rotate-12 transition-transform duration-300"
          />
          <div className="ml-3 flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-[var(--primary)]">
              lavabos-fib
            </span>
            <span className="text-[10px] font-mono bg-[var(--primary)] px-2 py-0.5 rounded text-white font-bold">
              BETA
            </span>
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {["Imatges", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-wide text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[var(--foreground)] focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col space-y-1 p-6">
            <li>
              <Link
                href="/imatges"
                onClick={() => setOpen(false)}
                className="block py-3 px-4 rounded-xl text-base font-bold text-[var(--foreground)] hover:bg-[var(--primary)]/10 transition-colors"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block py-3 px-4 rounded-xl text-base font-bold text-[var(--foreground)] hover:bg-[var(--primary)]/10 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
