import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">Lavabos FIB</h1>
      <Image
        src="/img/logo_lavabos-fib.png"
        alt="Logo Lavabos FIB"
        width={200}
        height={200}
        priority
        className="mt-8"
      />
      <div className="mt-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link href="/frases">
          <button className="w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center">
            Frases
          </button>
        </Link>
        <Link href="/ressenyes">
          <button className="w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center">
            Ressenyes
          </button>
        </Link>
        <Link href="/imatges">
          <button className="w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center">
            Galeria d'imatges
          </button>
        </Link>
        <Link href="/about">
          <button className="w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center">
            About
          </button>
        </Link>
      </div>
    </main>
  );
}
