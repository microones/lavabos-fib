import { prisma } from "@/lib/prisma"
import type { Ressenya, Lavabo } from "@/lib/prisma/client"

export type NewRessenya = {
  contingut: string
  puntuacio: number
  lavaboId: number
  reviewer?: string | null
}

export async function getLavabosWithRessenyes(): Promise<
  (Lavabo & { ressenyes: Ressenya[] })[]
> {
  return prisma.lavabo.findMany({
    include: { ressenyes: { orderBy: { data: "desc" } } },
    orderBy: [{ edifici: "asc" }, { planta: "asc" }],
  })
}

export async function insertRessenya(data: NewRessenya): Promise<Ressenya> {
  return prisma.ressenya.create({ data })
}

export async function getLatestRessenyes(
    take = 5
  ): Promise<(Ressenya & { lavabo: Lavabo })[]> {
    return prisma.ressenya.findMany({
      take,
      orderBy: { data: "desc" },
      include: { lavabo: true },
    })
  }