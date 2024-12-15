-- CreateTable
CREATE TABLE "projetos" (
    "id_projeto" SERIAL NOT NULL,
    "modalidade" TEXT NOT NULL,
    "unidade_origem" TEXT NOT NULL,
    "titulo_projeto" TEXT NOT NULL,
    "area_conhecimento" TEXT NOT NULL,
    "area_tematica" TEXT NOT NULL,
    "linha_tematica" TEXT NOT NULL,
    "coord_projeto" TEXT NOT NULL,
    "email_coord_projeto" TEXT NOT NULL,
    "dt_inicio_proj" TIMESTAMP(3) NOT NULL,
    "dt_fim_proj" TIMESTAMP(3) NOT NULL,
    "situacao" TEXT NOT NULL,
    "ult_alter_proj" TIMESTAMP(3) NOT NULL,
    "palavras_chave" TEXT NOT NULL,
    "resumo" TEXT NOT NULL,
    "parcerias" TEXT NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id_projeto")
);
