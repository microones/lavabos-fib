"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
        <nav className="hidden md:flex space-x-6">
          <Link href="/frases" className="text-lg hover:underline">
            Frases
          </Link>
          <Link href="/ressenyes" className="text-lg hover:underline">
            Ressenyes
          </Link>
          <Link href="/imatges" className="text-lg hover:underline">
            Galeria
          </Link>
          <Link href="/about" className="text-lg hover:underline">
            About
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="px-6 pb-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/frases" className="block text-lg hover:underline">
                Frases
              </Link>
            </li>
            <li>
              <Link href="/ressenyes" className="block text-lg hover:underline">
                Ressenyes
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="block text-lg hover:underline">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-lg hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}