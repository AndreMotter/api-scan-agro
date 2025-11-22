/*
  Warnings:

  - Added the required column `codigoservidor` to the `srh_leitura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datahora` to the `srh_leitura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidade` to the `srh_leitura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `srh_leitura` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "srh_leitura" ADD COLUMN     "codigoservidor" INTEGER NOT NULL,
ADD COLUMN     "datahora" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "unidade" TEXT NOT NULL,
ADD COLUMN     "valor" DECIMAL(20,4) NOT NULL;

-- CreateTable
CREATE TABLE "srh_usuario" (
    "codigousuario" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "srh_usuario_pkey" PRIMARY KEY ("codigousuario")
);

-- CreateTable
CREATE TABLE "srh_servidor" (
    "codigoservidor" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "identificador" TEXT NOT NULL,

    CONSTRAINT "srh_servidor_pkey" PRIMARY KEY ("codigoservidor")
);

-- CreateIndex
CREATE UNIQUE INDEX "srh_usuario_login_key" ON "srh_usuario"("login");

-- AddForeignKey
ALTER TABLE "srh_leitura" ADD CONSTRAINT "srh_leitura_codigoservidor_fkey" FOREIGN KEY ("codigoservidor") REFERENCES "srh_servidor"("codigoservidor") ON DELETE RESTRICT ON UPDATE CASCADE;
