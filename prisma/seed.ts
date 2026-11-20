// Seed de dades de desenvolupament. Executa: `bunx prisma db seed`
// És idempotent: esborra les dades de lavabos (no els usuaris) i les torna a crear.
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Genere } from "../generated/prisma/client";

const adapter = new PrismaPg({ connectionString: `${process.env.DATABASE_URL}` });
const prisma = new PrismaClient({ adapter });

type LavaboSeed = { string_id: string; edifici: string; planta: string; genere: Genere };

const lavabos: LavaboSeed[] = [
  { string_id: "a5-1-neutre", edifici: "A5", planta: "1", genere: Genere.NEUTRE },
  { string_id: "a5-0-masculi", edifici: "A5", planta: "0", genere: Genere.MASCULI },
  { string_id: "a6-2-femeni", edifici: "A6", planta: "2", genere: Genere.FEMENI },
  { string_id: "a1-0-neutre", edifici: "A1", planta: "0", genere: Genere.NEUTRE },
  { string_id: "b6-m1-femeni", edifici: "B6", planta: "-1", genere: Genere.FEMENI },
  { string_id: "b6-0-masculi", edifici: "B6", planta: "0", genere: Genere.MASCULI },
  { string_id: "b3-1-neutre", edifici: "B3", planta: "1", genere: Genere.NEUTRE },
  { string_id: "c6-m1-masculi", edifici: "C6", planta: "-1", genere: Genere.MASCULI },
];

type FraseSeed = {
  lavabo: string;
  contingut?: string;
  dibuix?: boolean;
  idioma?: string;
  respostes?: FraseSeed[];
  comentaris?: string[];
};

// Les respostes niades es creen amb `respostaId` apuntant a la frase pare.
const frases: FraseSeed[] = [
  {
    lavabo: "a5-1-neutre",
    contingut: "Aquí vaig aprovar EDA. Bé, aquí vaig plorar per EDA.",
    idioma: "ca",
    comentaris: ["Clàssic", "Tots hem estat aquí"],
    respostes: [
      {
        lavabo: "a5-1-neutre",
        contingut: "Jo encara estic plorant, quatre quadrimestres després",
        idioma: "ca",
        respostes: [
          {
            lavabo: "a5-1-neutre",
            contingut: "Ànims, que a la cinquena va la vençuda",
            idioma: "ca",
          },
        ],
      },
    ],
  },
  {
    lavabo: "a5-1-neutre",
    contingut: "Si llegeixes això, el teu codi compila però no funciona",
    idioma: "ca",
    comentaris: ["Com sabia que era el meu?"],
  },
  { lavabo: "a5-1-neutre", dibuix: true },
  {
    lavabo: "a5-0-masculi",
    contingut: "¿Alguien sabe dónde está el aula A5-001? Llevo tres días buscándola",
    idioma: "es",
    respostes: [
      {
        lavabo: "a5-0-masculi",
        contingut: "Está detrás del bucle infinito, gira a la izquierda",
        idioma: "es",
        respostes: [
          {
            lavabo: "a5-0-masculi",
            contingut: "Gracias, ahora estoy en un deadlock",
            idioma: "es",
          },
        ],
      },
    ],
  },
  {
    lavabo: "a5-0-masculi",
    contingut: "It works on my machine",
    idioma: "en",
    comentaris: ["Then we ship your machine"],
  },
  {
    lavabo: "a6-2-femeni",
    contingut: "El paper higiènic d'aquest lavabo té més capes que el model OSI",
    idioma: "ca",
    comentaris: ["Física, enllaç i poc més"],
  },
  { lavabo: "a6-2-femeni", contingut: "Dóna'm força, PRO1", idioma: "ca" },
  { lavabo: "a6-2-femeni", dibuix: true },
  {
    lavabo: "a1-0-neutre",
    contingut: "Recordatori: el cafè de la màquina no compta com a hidratació",
    idioma: "ca",
  },
  { lavabo: "a1-0-neutre", contingut: "There are 10 types of people...", idioma: "en" },
  {
    lavabo: "b6-m1-femeni",
    contingut: "Planta -1: on venen els bugs a morir",
    idioma: "ca",
    comentaris: ["I a reproduir-se"],
  },
  { lavabo: "b6-m1-femeni", contingut: "Aquí no hi ha cobertura ni esperança", idioma: "ca" },
  { lavabo: "b6-m1-femeni", dibuix: true },
  {
    lavabo: "b6-0-masculi",
    contingut: "git commit -m \"arreglat\" (no estava arreglat)",
    idioma: "ca",
  },
  { lavabo: "b6-0-masculi", contingut: "Hoy tampoco toca entregar a tiempo", idioma: "es" },
  {
    lavabo: "b3-1-neutre",
    contingut: "Ningú no sap on és el B3. Si ets aquí, ets llegenda.",
    idioma: "ca",
    comentaris: ["Confirmo, m'he perdut per arribar"],
  },
  { lavabo: "b3-1-neutre", contingut: "Have you tried turning it off and on again?", idioma: "en" },
  {
    lavabo: "c6-m1-masculi",
    contingut: "La recursivitat s'entén millor assegut aquí",
    idioma: "ca",
  },
  { lavabo: "c6-m1-masculi", dibuix: true },
  { lavabo: "c6-m1-masculi", contingut: "Segmentation fault (core dumped)", idioma: "en" },
  { lavabo: "a1-0-neutre", contingut: "Qui ha deixat el TFG a mitges a la cisterna?", idioma: "ca" },
];

const ressenyes: { lavabo: string; puntuacio: number; contingut: string }[] = [
  { lavabo: "a5-1-neutre", puntuacio: 4, contingut: "Net i amb bona literatura a les parets" },
  { lavabo: "a5-1-neutre", puntuacio: 5, contingut: "El meu lloc d'estudi preferit" },
  { lavabo: "a5-1-neutre", puntuacio: 3, contingut: "Sempre ple abans dels exàmens" },
  { lavabo: "a5-0-masculi", puntuacio: 2, contingut: "La porta no tanca bé" },
  { lavabo: "a5-0-masculi", puntuacio: 3, contingut: "Correcte, sense més" },
  { lavabo: "a6-2-femeni", puntuacio: 5, contingut: "Hi ha sabó! Increïble" },
  { lavabo: "a6-2-femeni", puntuacio: 4, contingut: "Bona llum, bones vibes" },
  { lavabo: "a1-0-neutre", puntuacio: 3, contingut: "Pràctic si vens de la biblioteca" },
  { lavabo: "b6-m1-femeni", puntuacio: 1, contingut: "Fa por baixar-hi sola" },
  { lavabo: "b6-m1-femeni", puntuacio: 2, contingut: "Ni cobertura ni eixugamans" },
  { lavabo: "b6-0-masculi", puntuacio: 4, contingut: "Sorprenentment net" },
  { lavabo: "b3-1-neutre", puntuacio: 5, contingut: "Ningú no hi va, pau absoluta" },
  { lavabo: "b3-1-neutre", puntuacio: 4, contingut: "Un amagatall perfecte" },
  { lavabo: "c6-m1-masculi", puntuacio: 2, contingut: "L'aixeta goteja des de 2019" },
  { lavabo: "c6-m1-masculi", puntuacio: 3, contingut: "Acceptable per a una urgència" },
];

async function crearFrase(f: FraseSeed, lavaboIds: Map<string, number>, respostaId?: number) {
  const lavaboId = lavaboIds.get(f.lavabo);
  if (lavaboId === undefined) throw new Error(`Lavabo desconegut: ${f.lavabo}`);

  const frase = await prisma.frase.create({
    data: {
      contingut: f.dibuix ? null : f.contingut,
      dibuix: f.dibuix ?? false,
      idioma: f.dibuix ? null : f.idioma,
      lavaboId,
      respostaId,
      comentaris: f.comentaris ? { create: f.comentaris.map((contingut) => ({ contingut })) } : undefined,
    },
  });

  let total = 1;
  for (const r of f.respostes ?? []) total += await crearFrase(r, lavaboIds, frase.id);
  return total;
}

async function main() {
  // Ordre: primer els fills, després els pares.
  await prisma.comentari.deleteMany();
  await prisma.ressenya.deleteMany();
  // respostaId és ON DELETE SET NULL: es poden esborrar totes les frases de cop.
  await prisma.frase.deleteMany();
  await prisma.imatge.deleteMany();
  await prisma.lavabo.deleteMany();

  const lavaboIds = new Map<string, number>();
  for (const l of lavabos) {
    const creat = await prisma.lavabo.create({ data: l });
    lavaboIds.set(l.string_id, creat.id);
  }

  let numFrases = 0;
  for (const f of frases) numFrases += await crearFrase(f, lavaboIds);

  for (const r of ressenyes) {
    const lavaboId = lavaboIds.get(r.lavabo);
    if (lavaboId === undefined) throw new Error(`Lavabo desconegut: ${r.lavabo}`);
    await prisma.ressenya.create({ data: { contingut: r.contingut, puntuacio: r.puntuacio, lavaboId } });
  }

  const numComentaris = await prisma.comentari.count();
  console.log(
    `Seed fet: ${lavabos.length} lavabos, ${numFrases} frases, ${ressenyes.length} ressenyes, ${numComentaris} comentaris.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
