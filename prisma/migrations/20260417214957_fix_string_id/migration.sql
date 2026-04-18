/*
  Warnings:

  - A unique constraint covering the columns `[string_id]` on the table `Lavabo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Lavabo" ALTER COLUMN "string_id" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Lavabo_string_id_key" ON "Lavabo"("string_id");
