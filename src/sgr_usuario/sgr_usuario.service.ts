import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const sgrUsuarioSchema = z.object({
  login: z.string(),
  senha: z.string(),
});

@Injectable()
export class SgrUsuarioService {

  constructor(private prisma: PrismaService) {}
  
  async ListarTodos() {
    return await this.prisma.sgr_usuario.findMany();
  }

  async BuscarPorId(codigousuario: number) {
     return await this.prisma.sgr_usuario.findUnique({
      where: { codigousuario: codigousuario },
    });
  }

  async Salvar(data: any) {
   const sgr_usuario = sgrUsuarioSchema.parse(data);
   return await this.prisma.sgr_usuario.create({ data: sgr_usuario });
  }

  async Alterar(codigousuario: number, data: any) {
    const sgr_usuario = sgrUsuarioSchema.parse(data);
    return await this.prisma.sgr_usuario.update({
      where: { codigousuario: codigousuario },
      data: sgr_usuario,
    });
  }

  async Excluir(codigousuario: number) {
    await this.prisma.sgr_usuario.delete({ where: { codigousuario } });
  }
}
