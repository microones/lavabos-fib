"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SmallButton from "@/components/ui/SmallButton";
import { LogoutButton } from "@/components/logout-button";
import { useSession } from "@/lib/client/auth";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const navLinks = [
  { href: "/lavabos", label: "Lavabos" },
  { href: "/frases", label: "Frases" },
  { href: "/imatges", label: "Galeria" },
  { href: "/about", label: "About" },
];

type SessionUser = { admin?: boolean; mustChangePassword?: boolean };

/** Enllaços segons la sessió: Entra, o bé (Contrasenya | Admin) i Surt. */
function accountLinks(user: SessionUser | null | undefined) {
  if (!user) return [{ href: "/login", label: "Entra" }];
  if (user.mustChangePassword) return [{ href: "/compte/contrasenya", label: "Contrasenya" }];
  return user.admin ? [{ href: "/admin", label: "Admin" }] : [];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const user = session?.user as SessionUser | undefined;
  const compte = isPending ? [] : accountLinks(user);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg)] border-b-2 border-[var(--border)] shadow-sm transition-colors duration-200">
      <div className="flex items-center justify-between px-6 py-3 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Sense NEXT_PUBLIC_API_URL (dev sense API) no hi ha logo: next/image peta amb una URL relativa "undefined/..." */}
          {apiUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`${apiUrl}/api/v1/photos/file/public/lavabos-fib-logo.png?w=320`}
              alt="Lavabos FIB Logo"
              width={28}
              height={28}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
          )}
          <span className="text-xl font-extrabold tracking-tight text-[var(--primary)]">
            lavabos-fib
          </span>
          <span className="hidden sm:inline text-[10px] font-mono bg-[var(--secondary)] px-2 py-0.5 text-[var(--on-secondary)] font-bold">
            ALPHA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map(({ href, label }) => (
            <SmallButton key={href} href={href} variant="ghost">
              {label}
            </SmallButton>
          ))}
          {compte.map(({ href, label }) => (
            <SmallButton key={href} href={href} variant="ghost">
              {label}
            </SmallButton>
          ))}
          {user && <LogoutButton />}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[var(--fg)] border border-[var(--border)] focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-5 h-5"
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
        <nav className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <ul className="flex flex-col p-4 gap-2">
            {[...navLinks, ...compte].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-4 font-bold text-[var(--fg)] border border-transparent hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <LogoutButton onDone={() => setOpen(false)} />
              </li>
            )}
            <li className="pt-2">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
