'use client'

import { useState, Fragment } from "react"; // <--- Importem Fragment
import Link from "next/link";
import type { FraseAmbRelacions } from "@/actions/frases";

// --- SUB-COMPONENT RECURSIU (Igual que abans) ---
const FilVisualitzador = ({ frase, nivell = 0 }: { frase: any, nivell?: number }) => {
  if (!frase) return null;

  return (
    <div className={`mt-3 ${nivell > 0 ? 'ml-6 border-l-2 border-gray-300 pl-4' : ''}`}>
      <div className="bg-white p-3 rounded border border-gray-200 shadow-sm text-sm">
        <div className="flex justify-between items-start mb-1">
          <span className="font-bold text-gray-700 text-xs">
            {frase.lavabo.edifici} ({frase.lavabo.sexe})
          </span>
          <span className="text-gray-400 text-[10px] font-mono">ID: {frase.id}</span>
        </div>
        
        <div className="text-gray-900 mb-1 leading-snug">
          {frase.dibuix ? (
             <span className="text-purple-700 font-medium italic">🎨 [Contingut visual: Dibuix]</span>
          ) : (
             frase.contingut
          )}
        </div>

        {frase.imatge && (
          <a href={frase.imatge.url} target="_blank" className="text-blue-600 text-xs hover:underline flex items-center gap-1 mt-2">
            <span>📎</span> Veure imatge adjunta
          </a>
        )}
      </div>

      {frase.respostes && frase.respostes.length > 0 && (
        <div className="space-y-1 border-l border-dashed border-gray-300 ml-2 pl-2 pt-2">
          {frase.respostes.map((resposta: any) => (
            <FilVisualitzador key={resposta.id} frase={resposta} nivell={nivell + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
// ----------------------------------------------------

interface FrasesTableProps {
  frases: FraseAmbRelacions[];
  className?: string;
}

export default function FrasesTable({ frases, className }: FrasesTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (id: number) => {
    const newSet = new Set(expandedRows);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedRows(newSet);
  };

  if (!frases || frases.length === 0) return <div className="p-4 text-center text-gray-500">Sense dades.</div>;

  return (
    <div className={`overflow-x-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg bg-white ${className}`}>
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="w-10 px-2 py-3"></th>
            <th scope="col" className="py-3 pl-2 text-left text-xs font-bold uppercase text-gray-500">Ubicació</th>
            <th scope="col" className="px-3 py-3 text-left text-xs font-bold uppercase text-gray-500 w-1/2">Missatge</th>
            <th scope="col" className="px-3 py-3 text-center text-xs font-bold uppercase text-gray-500">Foto</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {frases.map((f) => {
            const hasReplies = f.respostes && f.respostes.length > 0;
            const isExpanded = expandedRows.has(f.id);

            return (
              // ⚠️ CLAU: Usem Fragment amb KEY aquí. Això no crea cap node al DOM.
              <Fragment key={f.id}>
                
                {/* 1. FILA PRINCIPAL */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-2 py-4 text-center align-top">
                    {hasReplies && (
                      <button
                        onClick={() => toggleRow(f.id)}
                        className={`p-1 rounded transition-transform duration-200 ${isExpanded ? 'rotate-90 text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600'}`}
                        aria-label={isExpanded ? "Tancar fil" : "Obrir fil"}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </button>
                    )}
                  </td>

                  <td className="py-4 pl-2 text-sm align-top whitespace-nowrap">
                    <div className="font-bold text-gray-900">{f.lavabo.edifici}</div>
                    <div className="text-gray-500 text-xs">Planta {f.lavabo.planta} • {f.lavabo.sexe}</div>
                    <Link href={`/lavabos/${f.lavaboId}`} className="text-[10px] text-blue-500 hover:underline block mt-1">
                      Veure lavabo
                    </Link>
                  </td>

                  <td className="px-3 py-4 text-sm text-gray-700 align-top">
                    <div className="font-medium text-base text-gray-900 leading-snug">
                      {f.dibuix ? <span className="text-purple-600 font-medium italic">🎨 Dibuix a la paret</span> : f.contingut}
                    </div>
                    
                    {/* Resum de respostes quan està TANCAT */}
                    {hasReplies && !isExpanded && (
                       <button 
                         onClick={() => toggleRow(f.id)} 
                         className="mt-2 inline-flex items-center gap-1 text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition"
                       >
                         <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                         Veure {f.respostes.length} respostes
                       </button>
                    )}

                    {/* Badge d'idioma */}
                    {f.idioma && (
                      <span className="mt-2 inline-block px-1.5 py-0.5 text-[10px] uppercase text-gray-400 border border-gray-200 rounded ml-2">
                        {f.idioma}
                      </span>
                    )}
                  </td>

                  <td className="px-3 py-4 text-center align-top">
                    {f.imatge ? (
                      <a 
                        href={f.imatge.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block p-2 bg-gray-50 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-300 transition"
                        title="Veure imatge completa"
                      >
                        <span className="text-xl">📷</span>
                      </a>
                    ) : (
                      <span className="text-gray-200 text-lg select-none">×</span>
                    )}
                  </td>
                </tr>

                {/* 2. FILA DE DETALLS (FIL DE CONVERSA) - Només si està expandit */}
                {isExpanded && hasReplies && (
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="px-4 py-4 border-b border-gray-200 shadow-inner">
                      <div className="ml-8 pl-4 border-l-2 border-blue-300">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span>Fil de conversa</span>
                          <span className="text-[10px] bg-gray-200 px-1.5 rounded-full text-gray-600">{f.respostes.length}</span>
                        </h4>
                        
                        <div className="flex flex-col gap-4">
                          {f.respostes.map((resposta) => (
                             <FilVisualitzador key={resposta.id} frase={resposta} />
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}