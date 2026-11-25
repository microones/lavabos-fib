-- Afegeix Lavabo.string_id (identificador per a la URL).
-- Funciona tant si la taula és buida com si ja té files: primer es crea nullable, s'omple
-- a partir d'edifici-planta-genere (planta "-1" → "m1") i, si hi ha duplicats, s'hi afegeix l'id.

-- AlterTable
ALTER TABLE "Lavabo" ADD COLUMN "string_id" TEXT;

-- Backfill
UPDATE "Lavabo"
SET "string_id" = trim(both '-' from regexp_replace(
  lower("edifici" || '-' || replace("planta", '-', 'm') || '-' || "genere"::text), '[^a-z0-9]+', '-', 'g'));

UPDATE "Lavabo" l
SET "string_id" = l."string_id" || '-' || l."id"
WHERE EXISTS (
  SELECT 1 FROM "Lavabo" o WHERE o."string_id" = l."string_id" AND o."id" < l."id"
);

ALTER TABLE "Lavabo" ALTER COLUMN "string_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Lavabo_string_id_key" ON "Lavabo"("string_id");
