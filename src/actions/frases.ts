// src/app/actions.ts
'use server'

import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const fraseBasica = {
  id: true,
  contingut: true,
  dibuix: true,
  createdAt: true, // Si l'has afegit, sinó treu-ho
  lavabo: { select: { edifici: true, sexe: true } }, // Només info bàsica de l'autor/lloc
  imatge: { select: { url: true } }
};

export async function getFrases() {
  return await prisma.frase.findMany({
    orderBy: { id: "desc" },
    include: {
      lavabo: true,
      imatge: true,
      pare: true,
      comentaris: true,
      
      // AQUÍ ESTÀ LA MÀGIA: Demanem 3 nivells de profunditat
      respostes: {
        include: {
          lavabo: true,
          imatge: true,
          respostes: { // Nivell 2 (néts)
            include: {
              lavabo: true,
              imatge: true,
              respostes: { // Nivell 3 (besnéts)
                include: {
                  lavabo: true,
                  imatge: true
                }
              }
            }
          }
        }
      }
    },
  });
}

export type FraseAmbRelacions = Prisma.PromiseReturnType<typeof getFrases>[number];

export async function createFrase(formData: FormData) {
  // 1. Extreure les dades del formulari HTML
  const contingut = formData.get('contingut') as string
  const lavaboId = parseInt(formData.get('lavaboId') as string)
  const isDibuix = formData.get('dibuix') === 'on' // Els checkbox retornen "on" si estan marcats

  // 2. Validació bàsica
  if (!lavaboId) throw new Error("Falta l'ID del lavabo")
  if (!contingut && !isDibuix) throw new Error("Has d'escriure alguna cosa o marcar que és un dibuix")

  // 3. Crear a la BD
  await prisma.frase.create({
    data: {
      contingut: contingut || '', // Si és null posem string buit o ho gestionem segons vulguis
      dibuix: isDibuix,
      lavaboId: lavaboId,
      idioma: 'CAT' // Per defecte, o podries afegir un select al form
    }
  })

  // 4. Refrescar la pàgina perquè surti la frase nova immediatament
  revalidatePath(`/lavabos/${lavaboId}`)
}