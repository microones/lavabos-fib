// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

// 1. Configurem la connexió amb el driver natiu de Postgres (pg)
const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

// 2. Mantenim la lògica del global per evitar problemes amb el hot-reloading de Next.js
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, // <--- AQUÍ ESTÀ LA CLAU: Passem l'adaptador explícitament
    log: ['query'], 
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma