import type { Frase } from "@/lib/prisma/client";

interface FrasesTableProps {
  frases: Frase[];
  className?: string;
}

export default function FrasesTable({ frases, className }: FrasesTableProps) {
  if (frases.length === 0) {
    return <p className="p-4 text-center">No hi ha frases disponibles.</p>;
  }

  return (
    <div className={className}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Contingut</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Idioma</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Any</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Resposta</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Fitxer Imatge</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Lavabo ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Data Creació</th>
          </tr>
        </thead>
        <tbody>
          {frases.map((f) => (
            <tr key={f.id} className="even:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">{f.id}</td>
              <td className="px-4 py-2 text-sm text-gray-800 break-words max-w-xs">
                {f.contingut}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">{f.idioma}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{f.any}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{f.resposta ?? "—"}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{f.fitxerImg ?? "—"}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{f.lavaboId}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {new Date(f.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}