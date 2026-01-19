// app/lavabos/page.tsx
import { prisma } from '@/lib/db'; // Importem el client que hem configurat

export default async function LavabosPage() {
  // 1. Fem la consulta a la BD (això és codi de servidor, és segur!)
  const lavabos = await prisma.lavabo.findMany({
    orderBy: { edifici: 'asc' },
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Llista de Lavabos de la FIB</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lavabos.map((lavabo) => (
          <div key={lavabo.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="font-semibold text-lg">Edifici {lavabo.edifici}</h2>
            <p>Planta: {lavabo.planta}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Gènere: {lavabo.genere}
            </p>
            <a 
              href={`/lavabos/${lavabo.id}`} 
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              Veure frases →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}