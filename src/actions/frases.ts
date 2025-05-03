import bd from "../lib/bd"

import fs from "fs/promises"
import path from "path"
import type { Frase, Idioma } from "@prisma/client"

export async function getFrases(): Promise<Frase[]> {
  return prisma.frase.findMany({
    orderBy: { createdAt: "desc" },
  })
}

export interface NewFrase {
  contingut: string
  idioma: Idioma
  any: number
  resposta?: number
  fitxerImg?: string
  lavaboId: number
}

export async function insertFrase(data: NewFrase): Promise<Frase> {
  return prisma.frase.create({ data })
}

/**
 * Llegeix un fitxer JSON amb un array de frases i inserta-les en bloc.
 * El fitxer ha de ser un array d'objectes amb els camps de NewFrase.
 * Exemple:
 * [
 *   {
 *     "contingut": "Això és una frase",
 *     "idioma": "catala",
 *     "any": 2023,
 *     "lavaboId": 1
 *   },
 *   …
 * ]
 */
export async function bulkInsertFrasesFromFile(
  relativeFilePath: string
): Promise<{ count: number }> {
  const fullPath = path.resolve(process.cwd(), relativeFilePath)
  const raw = await fs.readFile(fullPath, "utf-8")
  const arr = JSON.parse(raw) as NewFrase[]
  const { count } = await prisma.frase.createMany({
    data: arr,
    skipDuplicates: true,
  })
  return { count }
}