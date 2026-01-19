import { prisma } from "@/lib/db";
import AdminFrasesManager from "@/components/AdminFrasesManager";
import Link from "next/link";

export default async function AdminPage() {
  const frases = await prisma.frase.findMany({
    orderBy: { id: 'desc' },
    include: { lavabo: true }
  });

  const lavabos = await prisma.lavabo.findMany({
    select: { id: true, edifici: true, planta: true, genere: true }
  });

  return (
    <div className="p-6 max-w-[95%] mx-auto min-h-screen">
      
      {/* Botó per tornar a /admin */}
      <Link 
        href="/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" height="18" 
          viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Tornar a /admin
      </Link>

      <AdminFrasesManager initialFrases={frases} lavabos={lavabos} />
    </div>
  );
}