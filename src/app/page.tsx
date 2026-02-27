import Link from "next/link"

export default function HomePage() {
  const items = [
    { href: "/frases", label: "Frases" },
    { href: "/ressenyes", label: "Ressenyes" },
    { href: "/imatges", label: "Galeria d'imatges" },
    { href: "/about", label: "About" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 space-y-8">
      <p className="text-xl text-center">
        Benvinguts a lavabos-fib BETA
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {items.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="bg-white shadow-md hover:shadow-xl rounded-none p-6 text-center text-lg font-semibold transition-all duration-200 flex items-center justify-center"
          >
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
