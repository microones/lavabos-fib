"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="flex items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo_lavabos-fib.png"
            alt="Lavabos FIB Logo"
            width={40}
            height={40}
            priority
          />
          <span className="ml-2 text-2xl font-bold">Lavabos FIB</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/imatges"
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
          >
            Galeria
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="px-6 pb-4 md:hidden border-t">
          <ul className="flex flex-col space-y-3 pt-4">
            <li>
              <Link
                href="/imatges"
                className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
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
