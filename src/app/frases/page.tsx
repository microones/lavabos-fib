import { getFrases } from "@/actions/frases";
import FrasesTable from "@/components/FrasesTable";
import Link from "next/link";

export default async function FrasesPage() {
  const frases = await getFrases();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Capçalera amb títol i botó d'acció */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Arxiu de Frases</h1>
          <p className="text-gray-500 mt-1">Recull històric del que diuen les parets de la facultat.</p>
        </div>
        
        <Link 
          href="/frases/nova"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
        >
          <span className="mr-2 text-lg">+</span> Nova Aportació
        </Link>
      </div>

      {/* La taula complexa que hem creat abans */}
      <FrasesTable frases={frases} />
    </div>
  );
}