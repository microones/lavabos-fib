'use server'

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getUser } from "@/lib/server/auth";

// --- 1. ACTUALITZAR UNA FRASE ---
export async function updateFrase(id: number, data: any) {
  try {
    await prisma.frase.update({
      where: { id },
      data: {
        contingut: data.contingut,
        idioma: data.idioma,
        dibuix: data.dibuix === 'true' || data.dibuix === true,
        lavaboId: parseInt(data.lavaboId),
      }
    });
    revalidatePath('/admin/frases');
    revalidatePath('/frases'); // Actualitza també la pública
    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

// --- 2. ELIMINAR ---
export async function deleteFrase(id: number) {
  try {
    await prisma.frase.delete({ where: { id } });
    revalidatePath('/admin/frases');
    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

// --- 3. IMPORTACIÓ MASSIVA (Bulk) ---
// Suposem que passem un text on cada línia és una frase
export async function bulkImportFrases(text: string, lavaboId: number) {
  if (!lavaboId) return { success: false, error: "Falta ID de lavabo" };
  
  const linies = text.split('\n').filter(l => l.trim().length > 0);
  const dades = linies.map(l => ({
    contingut: l.trim(),
    lavaboId: lavaboId,
    dibuix: false,
  }));

  try {
    await prisma.frase.createMany({ data: dades });
    revalidatePath('/admin/frases');
    return { success: true, count: dades.length };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

// --- 4. SQL DIRECTE (PERILLÓS) ---
export async function executeRawSql(query: string) {
  const session = await getUser();
  if (!session || !session.admin) throw new Error("No autoritzat");

  try {
    // queryRawUnsafe permet SQL Injection
    // Només per a ús intern d'admins
    const result = await prisma.$queryRawUnsafe(query);

    // Next.js no pot enviar BigInt al client (dóna error de serialització)
    // Els convertim a string abans de retornar-los
    const cleanResult = JSON.parse(JSON.stringify(result, (key, value) =>
      typeof value === 'bigint'
        ? value.toString()
        : value
    ));

    return { success: true, data: cleanResult };
  } catch (e: any) {
    // Retornem l'error de SQL perquè es vegi a la terminal
    return { success: false, error: e.message };
  }
}