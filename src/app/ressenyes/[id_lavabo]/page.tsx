import { notFound } from "next/navigation"
import {
  getLavaboById,
  insertRessenya,
  NewRessenya,
  getAllLavabosIds,
} from "@/actions/ressenyes"
import type { Ressenya } from "@/lib/prisma/client"

interface Params { id_lavabo: string }

export const revalidate = 0

// Aquest helper genera els params per a `next export`
export async function generateStaticParams(): Promise<Params[]> {
  // Agafa només els IDs dels lavabos
  const ids = await getAllLavabosIds()
  return ids.map((id) => ({ id_lavabo: id.toString() }))
}

export default async function LavaboPage({
  params,
}: { params: Params }) {
  const id = Number(params.id_lavabo)
  const lb = await getLavaboById(id)
  if (!lb) return notFound()

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Lavabo #{lb.id}</h1>
      <p className="uppercase">{lb.edifici} – Planta {lb.planta} – {lb.genere}</p>

      {/* Formulat nou al capdavant */}
      <form action={async (formData: FormData) => {
        "use server"
        const reviewerInput = (formData.get("reviewer") as string)?.trim()
        const data: NewRessenya = {
          lavaboId: id,
          contingut: formData.get("contingut") as string,
          puntuacio: Number(formData.get("puntuacio")),
          reviewer: reviewerInput || null,
        }
        await insertRessenya(data)
      }}
      className="space-y-2"
      >
        <h2 className="text-2xl font-semibold">Escriu una ressenya</h2>
        <input
          type="text"
          name="reviewer"
          placeholder="El teu nom (opc.)"
          className="w-full border px-2 py-1 rounded"
        />
        <textarea
          name="contingut"
          required
          placeholder="La teva ressenya…"
          className="w-full border px-2 py-1 rounded"
        />
        <div className="flex items-center space-x-2">
          <label>Puntuació:</label>
          <select name="puntuacio" required className="border px-2 py-1 rounded">
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <button
            type="submit"
            className="ml-auto px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Envia
          </button>
        </div>
      </form>

      {/* Llistat de ressenyes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ressenyes</h2>
        {lb.ressenyes.length === 0 ? (
          <p className="italic text-gray-500">Encara no hi ha ressenyes.</p>
        ) : (
          <div className="space-y-4">
            {lb.ressenyes.map((r: Ressenya) => (
              <div key={r.id} className="border p-4 rounded bg-gray-50">
                <header className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{r.autor || "Anònim"}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(r.data).toLocaleDateString()}
                  </span>
                </header>
                <p className="mb-2">{r.contingut}</p>
                <span className="font-medium">{r.puntuacio}/5</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}