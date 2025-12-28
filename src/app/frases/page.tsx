// src/app/frases/page.tsx
import { getFrases } from "@/actions/frases";
import FrasesTable from "@/components/FrasesTable";

export default async function FrasesPage() {
  const frases = await getFrases();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Arxiu de Frases</h1>
      <FrasesTable frases={frases} />
    </div>
  );
}