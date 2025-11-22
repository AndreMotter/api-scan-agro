import { Injectable } from '@nestjs/common';
import { CreateSgrUsuarioDto } from './dto/create-sgr_usuario.dto';
import { UpdateSgrUsuarioDto } from './dto/update-sgr_usuario.dto';
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

  Salvar(data: CreateSgrUsuarioDto) {
   const sgr_usuario = sgrUsuarioSchema.parse(data);
   return this.prisma.sgr_usuario.create({ data: sgr_usuario });
  }

  Alterar(codigousuario: number, data: UpdateSgrUsuarioDto) {
    const sgr_usuario = sgrUsuarioSchema.parse(data);
    return this.prisma.sgr_usuario.update({
      where: { codigousuario: codigousuario },
      data,
    });
  }

  Excluir(codigousuario: number) {
    this.prisma.sgr_usuario.delete({ where: { codigousuario } });
  }
}
