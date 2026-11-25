'use server'

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getUserOrThrow } from "@/lib/server/auth";

const NO_AUTORITZAT = "No autoritzat";

// Retorna true si l'usuari actual és admin (sense llançar)
async function esAdmin(): Promise<boolean> {
  try {
    await getUserOrThrow({ admin: true });
    return true;
  } catch {
    return false;
  }
}

export type FraseUpdateData = {
  contingut?: string;
  idioma?: string;
  dibuix?: boolean | string;
  lavaboId: number | string;
};

// AdminFrasesManager envia Object.fromEntries(formData): també acceptem aquest format
type FraseUpdateInput = FraseUpdateData | Record<string, FormDataEntryValue>;

function parseLavaboId(valor: unknown): number | null {
  if (typeof valor !== "number" && typeof valor !== "string") return null;
  const n = typeof valor === "number" ? valor : Number(valor.trim());
  return Number.isInteger(n) && n > 0 ? n : null;
}

function comText(valor: unknown): string | undefined {
  return typeof valor === "string" ? valor : undefined;
}

// --- 1. ACTUALITZAR UNA FRASE ---
export async function updateFrase(id: number, data: FraseUpdateInput) {
  if (!(await esAdmin())) return { success: false, error: NO_AUTORITZAT };
  if (!Number.isInteger(id)) return { success: false, error: "ID de frase invàlid" };
  const lavaboId = parseLavaboId(data?.lavaboId);
  if (lavaboId === null) return { success: false, error: "ID de lavabo invàlid" };

  try {
    await prisma.frase.update({
      where: { id },
      data: {
        contingut: comText(data.contingut),
        idioma: comText(data.idioma),
        dibuix: data.dibuix === 'true' || data.dibuix === true,
        lavaboId,
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
  if (!(await esAdmin())) return { success: false, error: NO_AUTORITZAT };
  if (!Number.isInteger(id)) return { success: false, error: "ID de frase invàlid" };

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
  if (!(await esAdmin())) return { success: false, error: NO_AUTORITZAT };
  if (!Number.isInteger(lavaboId) || lavaboId <= 0) return { success: false, error: "Falta ID de lavabo" };
  if (typeof text !== "string") return { success: false, error: "Text invàlid" };
  
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
