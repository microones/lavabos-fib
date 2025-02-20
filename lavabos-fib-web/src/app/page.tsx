import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="p-6">
            <div className="flex items-center space-x-2">
            <Image src="/favicon.ico" alt="Lavabos FIB" width={25} height={25} />
                <h1 className="font-bold text-2xl">Lavabos FIB</h1>
                
            </div>
            
            <Link href="/cercador" className="text-blue-600 underline">Cercador</Link> <br/>
            <Link href="/estadistiques" className="text-blue-600 underline">Estadístiques</Link> <br/>
            <Link href="/reservori" className="text-blue-600 underline">Reservori</Link>
        </main>
    );
}