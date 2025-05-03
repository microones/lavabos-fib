import { getFrases } from "@/actions/frases";
import FrasesTable from "@/components/FrasesTable";
import type { Frase } from "@/lib/prisma/client";

export default async function FrasesPage() {
  const frases: Frase[] = await getFrases();

  return (
    <div className="p-8 overflow-auto">
      <h1 className="text-3xl font-bold text-center mb-4 mx-auto">Llista de Frases</h1>
      <FrasesTable frases={frases} className="shadow rounded" />
    </div>
  );
}