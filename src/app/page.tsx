import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Lavabos FIB</h1>
      <p className="mt-4 text-lg">Welcome to my Next.js app!</p>
      <Image
        src="/img/logo_lavabos-fib.png"
        alt="Logo Lavabos FIB"
        width={200}
        height={200}
        priority
        className="mt-8"
      />
      <div className="mt-8 flex space-x-4">
        <Link href="/frases">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Frases
          </button>
        </Link>
        <Link href="/ressenyes">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Ressenyes
          </button>
        </Link>
        <Link href="/imatges">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Galeria d'imatges
          </button>
        </Link>
        <Link href="/about">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            About
          </button>
        </Link>
      </div>
    </main>
  );
}
