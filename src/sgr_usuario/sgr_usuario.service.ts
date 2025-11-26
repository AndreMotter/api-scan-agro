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
  
  ListarTodos() {
    return this.prisma.sgr_usuario.findMany();
  }

  BuscarPorId(codigousuario: number) {
     return this.prisma.sgr_usuario.findUnique({
      where: { codigousuario: codigousuario },
    });
  }

  Salvar(data: any) {
   const sgr_usuario = sgrUsuarioSchema.parse(data);
   return this.prisma.sgr_usuario.create({ data: sgr_usuario });
  }

  Alterar(codigousuario: number, data: any) {
    const sgr_usuario = sgrUsuarioSchema.parse(data);
    return this.prisma.sgr_usuario.update({
      where: { codigousuario: codigousuario },
      data: sgr_usuario,
    });
  }

  Excluir(codigousuario: number) {
    this.prisma.sgr_usuario.delete({ where: { codigousuario } });
  }
}
