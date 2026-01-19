import { prisma } from "@/lib/db";
import AdminFrasesManager from "@/components/AdminFrasesManager";

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
      <AdminFrasesManager initialFrases={frases} lavabos={lavabos} />
    </div>
  );
}