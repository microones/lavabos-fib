import Link from "next/link"
import { getLatestRessenyes, getLavabosWithRessenyes } from "@/actions/ressenyes"
import type { Lavabo } from "@/lib/prisma/client"

export const revalidate = 0

export default async function RessenyesPage() {
  const latest = await getLatestRessenyes(5)
  const lavabos = await getLavabosWithRessenyes()

  // agrupar per edifici → planta
  const grouped = lavabos.reduce<Record<string, Record<string, Lavabo[]>>>(
    (acc, lb) => {
      acc[lb.edifici] ||= {}
      acc[lb.edifici][lb.planta] ||= []
      acc[lb.edifici][lb.planta].push(lb)
      return acc
    },
    {}
  )

  return (
    <main className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-4">Ressenyes de Lavabos</h1>

      {/* Darreres ressenyes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Darreres Ressenyes</h2>
        {latest.length === 0 ? (
          <p className="italic text-gray-500">Cap ressenya encara.</p>
        ) : (
          <ul className="space-y-4">
            {latest.map((r) => (
              <li key={r.id} className="border p-4 rounded bg-gray-50 flex justify-between">
                <div>
                  <p className="font-semibold">{r.autor || "Anònim"}</p>
                  <p className="text-sm">{r.contingut}</p>
                  <Link
                    href={`/ressenyes/${r.lavaboId}`}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Veure lavabo #{r.lavaboId}
                  </Link>
                </div>
                <span className="text-gray-500 text-sm">{new Date(r.data).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Llistat de lavabos amb enllaç per entrar */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tots els lavabos</h2>
        {Object.entries(grouped).map(([edifici, plantas]) => (
          <div key={edifici} className="mb-8">
            <h3 className="text-xl font-medium mb-2">{edifici}</h3>
            {Object.entries(plantas).map(([planta, llistat]) => (
              <div key={planta} className="mb-4">
                <p className="font-semibold">Planta {planta}</p>
                <ul className="list-disc list-inside ml-4">
                  {llistat.map((lb) => (
                    <li key={lb.id}>
                      <Link
                        href={`/ressenyes/${lb.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        Lavabo #{lb.id} ({lb.genere})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}