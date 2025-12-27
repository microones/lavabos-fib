// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

// Afegim prisma a l'objecte global de NodeJS per evitar
// múltiples instàncies durant el "hot reloading" en desenvolupament.
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Opcional: Això farà que vegis les consultes SQL a la consola (molt útil per aprendre)
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma