-- CreateTable
CREATE TABLE "sgr_areacoleta" (
    "codigoareacoleta" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "sgr_areacoleta_pkey" PRIMARY KEY ("codigoareacoleta")
);

-- CreateTable
CREATE TABLE "sgr_leituravideo" (
    "codigoleituravideo" SERIAL NOT NULL,
    "codigoareacoleta" INTEGER NOT NULL,
    "codigocultura" INTEGER NOT NULL,
    "quantidade" DECIMAL(20,4) NOT NULL,
    "video" TEXT NOT NULL,
    "datahora" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sgr_leituravideo_pkey" PRIMARY KEY ("codigoleituravideo")
);

-- AddForeignKey
ALTER TABLE "sgr_leituravideo" ADD CONSTRAINT "sgr_leituravideo_codigoareacoleta_fkey" FOREIGN KEY ("codigoareacoleta") REFERENCES "sgr_areacoleta"("codigoareacoleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sgr_leituravideo" ADD CONSTRAINT "sgr_leituravideo_codigocultura_fkey" FOREIGN KEY ("codigocultura") REFERENCES "sgr_cultura"("codigocultura") ON DELETE RESTRICT ON UPDATE CASCADE;
