/*
  Warnings:

  - The primary key for the `projetos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "projetos" DROP CONSTRAINT "projetos_pkey",
ALTER COLUMN "id_projeto" DROP DEFAULT,
ALTER COLUMN "id_projeto" SET DATA TYPE TEXT,
ALTER COLUMN "modalidade" DROP NOT NULL,
ALTER COLUMN "unidade_origem" DROP NOT NULL,
ALTER COLUMN "titulo_projeto" DROP NOT NULL,
ALTER COLUMN "area_conhecimento" DROP NOT NULL,
ALTER COLUMN "area_tematica" DROP NOT NULL,
ALTER COLUMN "linha_tematica" DROP NOT NULL,
ALTER COLUMN "coord_projeto" DROP NOT NULL,
ALTER COLUMN "email_coord_projeto" DROP NOT NULL,
ALTER COLUMN "dt_inicio_proj" DROP NOT NULL,
ALTER COLUMN "dt_fim_proj" DROP NOT NULL,
ALTER COLUMN "situacao" DROP NOT NULL,
ALTER COLUMN "ult_alter_proj" DROP NOT NULL,
ALTER COLUMN "palavras_chave" DROP NOT NULL,
ALTER COLUMN "resumo" DROP NOT NULL,
ADD CONSTRAINT "projetos_pkey" PRIMARY KEY ("id_projeto");
DROP SEQUENCE "projetos_id_projeto_seq";
