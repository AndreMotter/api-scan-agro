-- CreateTable
CREATE TABLE "sgr_usuario" (
    "codigousuario" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "sgr_usuario_pkey" PRIMARY KEY ("codigousuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "sgr_usuario_login_key" ON "sgr_usuario"("login");
