-- CreateTable
CREATE TABLE "sgr_cultura" (
    "codigocultura" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nomecientifico" TEXT,
    "descricao" TEXT,
    "correferencia" TEXT,
    "imagem" TEXT,
    "situacao" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "sgr_cultura_pkey" PRIMARY KEY ("codigocultura")
);
