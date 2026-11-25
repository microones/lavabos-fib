import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

// L'adaptador no llegeix ?schema= de la URL (el CLI de Prisma sí): el passem a part
let schema: string | undefined
try { schema = new URL(connectionString).searchParams.get('schema') ?? undefined } catch {}

const adapter = new PrismaPg({ connectionString }, schema ? { schema } : undefined)
const prisma = new PrismaClient({ adapter })

export { prisma }
