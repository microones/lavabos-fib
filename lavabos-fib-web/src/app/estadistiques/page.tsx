import Link from "next/link";

export default function Page() {
    return (
        <main className="p-6">
            <h1 className="font-bold text-2xl">Lavabos FIB - Estadístiques</h1>
            
            <Link href="/" className="text-blue-600 underline">Tornar a l'inici</Link>
        </main>
    );
}