'use client'

import { useState } from "react";
import { updateFrase, deleteFrase, bulkImportFrases } from "@/actions/admin";

type LavaboOpcio = { id: number; edifici: string; planta: number | string; genere: string };
type FraseAdmin = {
  id: number;
  contingut: string | null;
  lavaboId: number;
  lavabo?: { edifici: string; genere: string } | null;
};

interface Props {
  initialFrases: FraseAdmin[];
  lavabos: LavaboOpcio[];
}

export default function AdminFrasesManager({ initialFrases, lavabos }: Props) {
  const [activeTab, setActiveTab] = useState<'visual' | 'massiu'>('visual');
  const [frases, setFrases] = useState(initialFrases); // Estat local per optimisme UI
  const [editingId, setEditingId] = useState<number | null>(null);

  // Estats per importació massiva
  const [bulkText, setBulkText] = useState("");
  const [bulkLavabo, setBulkLavabo] = useState(String(lavabos[0]?.id ?? ""));
  const [bulkLanguage, setBulkLanguage] = useState("ca");


  // --- HANDLERS ---

  const handleUpdate = async (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as Record<string, FormDataEntryValue>;
    
    const res = await updateFrase(id, data);
    if (!res.success) { alert("Error: " + res.error); return; }
    setEditingId(null);
    alert("Frase actualitzada!");
    
    // Actualitzar la taula després de l'actualització
    const updatedFrases = frases.map((frase) =>
      frase.id === id ? { ...frase, contingut: String(data.contingut ?? frase.contingut), lavaboId: Number(data.lavaboId) } : frase
    );
    setFrases(updatedFrases);
  };

  const handleDelete = async (id: number) => {
    if(!confirm("Segur que vols esborrar aquesta frase?")) return;
    const res = await deleteFrase(id);
    if (!res.success) { alert("Error: " + res.error); return; }
    setFrases(frases.filter((f) => f.id !== id));
  };

  const handleBulkImport = async () => {
    const res = await bulkImportFrases(bulkText, parseInt(bulkLavabo));
    if(res.success) {
      alert(`Importades ${res.count} frases correctament!`);
      setBulkText("");
    } else {
      alert("Error: " + res.error);
    }
  };


  return (
    <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
      
      {/* TABS HEADER */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button 
          onClick={() => {
            setActiveTab('visual');
            window.location.reload(); // Actualitzar la pàgina
          }}
          className={`px-6 py-4 font-bold text-sm ${activeTab === 'visual' ? 'bg-white text-blue-600 border-t-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Editor de frases
        </button>
        <button 
          onClick={() => setActiveTab('massiu')}
          className={`px-6 py-4 font-bold text-sm ${activeTab === 'massiu' ? 'bg-white text-green-600 border-t-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          muchotexto™
        </button>
      </div>

      {/* CONTINGUT TABS */}
      <div className="p-6">
        
        {/* --- TAB 1: VISUAL EDIT --- */}
        {activeTab === 'visual' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase w-1/2">Contingut</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Lavabo</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Accions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {frases.map((frase) => (
                  <tr key={frase.id}>
                    {editingId === frase.id ? (
                      // FORMULARI D'EDICIÓ EN LINIA
                      <td colSpan={4} className="p-2 bg-blue-50">
                        <form onSubmit={(e) => handleUpdate(e, frase.id)} className="flex gap-2 items-center">
                          <span className="text-gray-500 text-sm font-mono w-10">#{frase.id}</span>
                          <input name="contingut" defaultValue={frase.contingut || ""} className="flex-1 border p-1 rounded text-sm" />
                          <select name="lavaboId" defaultValue={frase.lavaboId} className="border p-1 rounded text-sm w-40">
                            {lavabos.map((l) => (
                              <option key={l.id} value={l.id}>{l.edifici} - {l.genere}</option>
                            ))}
                          </select>
                          <div className="flex gap-1">
                            <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded text-xs">Guardar</button>
                            <button type="button" onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-3 py-1 rounded text-xs">Cancel</button>
                          </div>
                        </form>
                      </td>
                    ) : (
                      // VISTA NORMAL
                      <>
                        <td className="px-3 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">#{frase.id}</td>
                        <td className="px-3 py-4 text-sm text-gray-900">{frase.contingut || <span className="text-purple-500 italic">Dibuix</span>}</td>
                        <td className="px-3 py-4 whitespace-nowrap text-xs text-gray-500">{frase.lavabo?.edifici} ({frase.lavabo?.genere})</td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button onClick={() => setEditingId(frase.id)} className="text-indigo-600 hover:text-indigo-900">Editar</button>
                          <button onClick={() => handleDelete(frase.id)} className="text-red-600 hover:text-red-900">Esborrar</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* --- TAB 2: IMPORTACIÓ MASSIVA --- */}
        {activeTab === 'massiu' && (
          <div className="max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Afegir moltes frases de cop</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Selector de Lavabo */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Selecciona el Lavabo Destí</label>
                <select 
                  value={bulkLavabo} 
                  onChange={(e) => setBulkLavabo(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {lavabos.map((l) => (
                    <option key={l.id} value={l.id}>{l.edifici} - {l.planta} ({l.genere})</option>
                  ))}
                </select>
              </div>

              {/* Selector d'Idioma */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Idioma de les frases</label>
                <select 
                  value={bulkLanguage} 
                  onChange={(e) => setBulkLanguage(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="ca">Català</option>
                  <option value="es">Castellà</option>
                  <option value="en">Anglès</option>
                </select>
              </div>
            </div>

            {/* Textarea */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Frases (una per línia)</label>
              <textarea 
                rows={10} 
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md font-mono p-2"
                placeholder={"Aquí va una frase\nAquí en va una altra\nI una tercera..."}
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
              />
              <p className="mt-2 text-xs text-gray-500 italic">
                * Cada línia es guardarà com una frase independent amb l&apos;idioma seleccionat a dalt.
              </p>
            </div>

            <button 
              onClick={handleBulkImport}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none w-full justify-center md:w-auto transition-colors"
            >
              Processar {bulkText.split('\n').filter(l => l.trim()).length} frases
            </button>
          </div>
        )}


      </div>
    </div>
  );
}