import { prisma } from "@/lib/db"
import type { Lavabo, Ressenya } from "@/lib/prisma/client"

export type NewRessenya = {
  contingut: string
  puntuacio: number
  lavaboId: number
  autor?: string | null
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

export async function getAllLavabosIds(): Promise<number[]> {
  const lavabos = await prisma.lavabo.findMany({
    select: { id: true },
  })
  return lavabos.map((l) => l.id)
}

export async function getLavaboById(
  id: number
): Promise<(Lavabo & { ressenyes: Ressenya[] }) | null> {
  return prisma.lavabo.findUnique({
    where: { id },
    include: { ressenyes: { orderBy: { data: "desc" } } },
  })
}