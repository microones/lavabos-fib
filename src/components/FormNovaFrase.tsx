'use client'

import { createFrase } from "@/actions/frases";

// Definim un tipus senzill pels lavabos que rebem
type LavaboOption = {
  id: number;
  edifici: string;
  planta: string;
  genere: "MASCULI" | "FEMENI" | "NEUTRE";
};

export default function FormNovaFrase({ lavabos }: { lavabos: LavaboOption[] }) {
  return (
    <form action={createFrase} className="space-y-6">
      
      {/* 1. SELECCIÓ DE LAVABO */}
      <div>
        <label htmlFor="lavaboId" className="block text-sm font-medium text-gray-700">
          On ho has vist?
        </label>
        <select
          name="lavaboId"
          id="lavaboId"
          required
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
        >
          <option value="">-- Selecciona el lavabo --</option>
          {lavabos.map((l) => (
            <option key={l.id} value={l.id}>
              Edifici {l.edifici} - Planta {l.planta} ({l.genere})
            </option>
          ))}
        </select>
      </div>

      {/* 2. CONTINGUT DE LA FRASE */}
      <div>
        <label htmlFor="contingut" className="block text-sm font-medium text-gray-700">
          Què hi posa?
        </label>
        <div className="mt-1">
          <textarea
            id="contingut"
            name="contingut"
            rows={4}
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2"
            placeholder="Escriu aquí el text exacte..."
          />
        </div>
      </div>

      {/* 3. OPCIONS EXTRA (Idioma i Checkbox Dibuix) */}
      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="idioma" className="block text-sm font-medium text-gray-700">Idioma</label>
          <select 
            name="idioma" 
            id="idioma" 
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="CAT">Català</option>
            <option value="CAST">Castellà</option>
            <option value="ANG">Anglès</option>
            <option value="ALTRE">Altre</option>
          </select>
        </div>

        <div className="w-1/2 flex items-center justify-center pt-6">
          <div className="flex items-center">
            <input
              id="dibuix"
              name="dibuix"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="dibuix" className="ml-2 block text-sm text-gray-900">
              És només un dibuix?
            </label>
          </div>
        </div>
      </div>

      {/* 4. BOTÓ SUBMIT */}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Afegir a l'arxiu
        </button>
      </div>
    </form>
  );
}