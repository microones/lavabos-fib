-- CreateEnum
CREATE TYPE "Genere" AS ENUM ('MASCULI', 'FEMENI', 'NEUTRE');

-- CreateTable
CREATE TABLE "Lavabo" (
    "id" SERIAL NOT NULL,
    "edifici" TEXT NOT NULL,
    "planta" TEXT NOT NULL,
    "genere" "Genere" NOT NULL DEFAULT 'NEUTRE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lavabo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imatge" (
    "id" SERIAL NOT NULL,
    "any" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "lavaboId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Imatge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frase" (
    "id" SERIAL NOT NULL,
    "contingut" TEXT,
    "dibuix" BOOLEAN NOT NULL DEFAULT false,
    "idioma" TEXT,
    "lavaboId" INTEGER NOT NULL,
    "imatgeId" INTEGER,
    "respostaId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Frase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentari" (
    "id" SERIAL NOT NULL,
    "contingut" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fraseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comentari_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ressenya" (
    "id" SERIAL NOT NULL,
    "contingut" TEXT NOT NULL,
    "puntuacio" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lavaboId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ressenya_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Imatge" ADD CONSTRAINT "Imatge_lavaboId_fkey" FOREIGN KEY ("lavaboId") REFERENCES "Lavabo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Frase" ADD CONSTRAINT "Frase_lavaboId_fkey" FOREIGN KEY ("lavaboId") REFERENCES "Lavabo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Frase" ADD CONSTRAINT "Frase_imatgeId_fkey" FOREIGN KEY ("imatgeId") REFERENCES "Imatge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Frase" ADD CONSTRAINT "Frase_respostaId_fkey" FOREIGN KEY ("respostaId") REFERENCES "Frase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentari" ADD CONSTRAINT "Comentari_fraseId_fkey" FOREIGN KEY ("fraseId") REFERENCES "Frase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressenya" ADD CONSTRAINT "Ressenya_lavaboId_fkey" FOREIGN KEY ("lavaboId") REFERENCES "Lavabo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
