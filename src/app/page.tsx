import Link from "next/link";

export default function HomePage() {
  const items = [
    { href: "/imatges", label: "Galeria d'imatges", active: true },
    { href: "/about", label: "About", active: true },
    { href: "/frases", label: "Frases", active: false },
    { href: "/ressenyes", label: "Ressenyes", active: false },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 space-y-8">
      <p className="text-xl text-center">Benvinguts a lavabos-fib BETA</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {items.map(({ href, label, active }) =>
          active ? (
            <Link
              key={href}
              href={href}
              className="bg-white shadow-md hover:shadow-xl rounded-none p-6 text-center text-lg font-semibold transition-all duration-200 flex items-center justify-center"
            >
              <span>{label}</span>
            </Link>
          ) : (
            <div
              key={label}
              className="bg-gray-200 rounded-none p-6 text-center text-lg font-semibold flex items-center justify-center opacity-60 cursor-not-allowed relative"
            >
              <span>{label}</span>
              <span className="absolute top-2 right-2 text-xs bg-yellow-400 px-2 py-1 rounded">
                en desenvolupament
              </span>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
