'use client'

import { useState } from "react";
import { updateFrase, deleteFrase, bulkImportFrases, executeRawSql } from "@/actions/admin";

export default function AdminFrasesManager({ initialFrases, lavabos }: any) {
  const [activeTab, setActiveTab] = useState<'visual' | 'massiu' | 'sql'>('visual');
  const [frases, setFrases] = useState(initialFrases); // Estat local per optimisme UI
  const [editingId, setEditingId] = useState<number | null>(null);

  // Estats per importació massiva
  const [bulkText, setBulkText] = useState("");
  const [bulkLavabo, setBulkLavabo] = useState(lavabos[0]?.id || "");
  const [bulkLanguage, setBulkLanguage] = useState("ca");

  // Estats per SQL
  const [sqlQuery, setSqlQuery] = useState("SELECT * FROM \"Frase\" LIMIT 5;");
  const [sqlResult, setSqlResult] = useState<any>(null);
  const [sqlError, setSqlError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- HANDLERS ---

  const handleUpdate = async (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    await updateFrase(id, data);
    setEditingId(null);
    alert("Frase actualitzada!");
    
    // Actualitzar la taula després de l'actualització
    const updatedFrases = frases.map((frase: any) => 
      frase.id === id ? { ...frase, ...data } : frase
    );
    setFrases(updatedFrases);
  };

  const handleDelete = async (id: number) => {
    if(!confirm("Segur que vols esborrar aquesta frase?")) return;
    await deleteFrase(id);
    setFrases(frases.filter((f: any) => f.id !== id));
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

  const handleRunSQL = async () => {
    setSqlError("");
    setSqlResult(null);
    setIsLoading(true);
    const res = await executeRawSql(sqlQuery);
    if(res.success) {
      setSqlResult(res.data);
    } else {
      setSqlError(res.error as string);
    }
    setIsLoading(false);
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
        <button 
          onClick={() => setActiveTab('sql')}
          className={`px-6 py-4 font-bold text-sm ${activeTab === 'sql' ? 'bg-black text-white' : 'text-gray-500 hover:text-gray-700'}`}
        >
          SQL
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
                {frases.map((frase: any) => (
                  <tr key={frase.id}>
                    {editingId === frase.id ? (
                      // FORMULARI D'EDICIÓ EN LINIA
                      <td colSpan={4} className="p-2 bg-blue-50">
                        <form onSubmit={(e) => handleUpdate(e, frase.id)} className="flex gap-2 items-center">
                          <span className="text-gray-500 text-sm font-mono w-10">#{frase.id}</span>
                          <input name="contingut" defaultValue={frase.contingut || ""} className="flex-1 border p-1 rounded text-sm" />
                          <select name="lavaboId" defaultValue={frase.lavaboId} className="border p-1 rounded text-sm w-40">
                            {lavabos.map((l: any) => (
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
                  {lavabos.map((l: any) => (
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
                * Cada línia es guardarà com una frase independent amb l'idioma seleccionat a dalt.
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

        {/* --- TAB 3: SQL TERMINAL --- */}
        {activeTab === 'sql' && (
          <div className="bg-gray-900 p-4 rounded-lg text-green-400 font-mono text-sm shadow-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-xs">PostgreSQL</span>
            </div>
            
            <textarea 
              value={sqlQuery}
              onChange={(e) => setSqlQuery(e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded mb-3 focus:outline-none focus:border-green-500 font-mono"
              rows={6}
              placeholder="SELECT * FROM..."
              spellCheck={false}
            />
            
            <div className="flex gap-2">
              <button 
                onClick={handleRunSQL}
                disabled={isLoading}
                className={`bg-green-700 text-white px-4 py-2 rounded font-bold transition flex items-center gap-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
              >
                {isLoading ? 'Executant...' : '▶ Executar Query'}
              </button>
              
              <button 
                onClick={() => setSqlQuery('SELECT * FROM "Frase" LIMIT 5;')}
                className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-xs"
              >
                Reset SELECT
              </button>
            </div>

            {/* ZONA D'ERRORS */}
            {sqlError && (
              <div className="mt-4 p-3 bg-red-900/40 border border-red-500 text-red-200 rounded whitespace-pre-wrap">
                Error SQL: {sqlError}
              </div>
            )}

            {/* ZONA DE RESULTATS */}
            {sqlResult !== null && (
              <div className="mt-4 overflow-x-auto bg-gray-950 rounded border border-gray-800">
                <p className="text-gray-500 p-2 text-xs border-b border-gray-800">
                  // Resultat ({Array.isArray(sqlResult) ? `${sqlResult.length} files` : 'Operació completada'})
                </p>
                
                {Array.isArray(sqlResult) && sqlResult.length > 0 ? (
                  <table className="min-w-full text-left text-xs">
                    <thead className="bg-gray-800 text-gray-300">
                      <tr>
                        {Object.keys(sqlResult[0]).map(key => (
                          <th key={key} className="px-3 py-2 border-r border-gray-700 font-mono truncate">{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {sqlResult.map((row: any, i: number) => (
                        <tr key={i} className="hover:bg-gray-800/50 border-b border-gray-800 last:border-0">
                          {Object.values(row).map((val: any, j: number) => (
                            <td key={j} className="px-3 py-2 border-r border-gray-800 truncate max-w-[200px] font-mono">
                              {val === null ? <span className="text-gray-600">NULL</span> : String(val)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                   // Si el resultat és buit o no és un array (ex: count d'un update)
                   <div className="p-4 text-gray-400">
                     {Array.isArray(sqlResult) && sqlResult.length === 0 
                        ? "0 resultats trobats." 
                        : <pre>{JSON.stringify(sqlResult, null, 2)}</pre>
                     }
                   </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}