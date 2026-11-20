import type { Genere } from "../../generated/prisma/client";

export const GENERE_LABEL: Record<Genere, string> = {
  MASCULI: "Masculí",
  FEMENI: "Femení",
  NEUTRE: "Neutre",
};

export function plantaLabel(planta: string): string {
  return /^-?\d+$/.test(planta.trim()) ? `Planta ${planta.trim()}` : planta;
}

export function mitjana(puntuacions: number[]): number | null {
  if (puntuacions.length === 0) return null;
  return puntuacions.reduce((a, b) => a + b, 0) / puntuacions.length;
}

export function estrelles(valor: number): string {
  const n = Math.max(0, Math.min(5, Math.round(valor)));
  return "★".repeat(n) + "☆".repeat(5 - n);
}
