import { getLavabosOptions } from "@/actions/frases";
import FormNovaFrase from "@/components/FormNovaFrase";
import Link from "next/link";

export default async function NovaFrasePage() {
  const lavabos = await getLavabosOptions();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <Link href="/frases" className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
            ← Tornar a l'arxiu
          </Link>
        </div>
        
        <div className="bg-white py-8 px-4 sm:px-10">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Nova aportació</h1>
            <p className="text-sm text-gray-500 mt-1">Falta res en la BD?</p>
          </div>
          
          {/* Passem els lavabos com a prop al formulari */}
          <FormNovaFrase lavabos={lavabos} />
        </div>
      </div>
    </div>
  );
}