/*
  Warnings:

  - The primary key for the `projetos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id_projeto` column on the `projetos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "projetos" DROP CONSTRAINT "projetos_pkey",
DROP COLUMN "id_projeto",
ADD COLUMN     "id_projeto" SERIAL NOT NULL,
ADD CONSTRAINT "projetos_pkey" PRIMARY KEY ("id_projeto");
