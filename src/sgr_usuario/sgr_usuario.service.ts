import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSgrUsuarioDto } from './dto/create-sgr_usuario.dto';
import { UpdateSgrUsuarioDto } from './dto/update-sgr_usuario.dto';

const prisma = new PrismaClient();

@Injectable()
export class SgrUsuarioService {

  ListarTodos() {
    return prisma.sgr_usuario.findMany();
  }

  BuscarPorId(codigousuario: number) {
     return prisma.sgr_usuario.findUnique({
      where: { codigousuario: codigousuario },
    });
  }

  Salvar(data: CreateSgrUsuarioDto) {
   return prisma.sgr_usuario.create({ data });
  }

  Alterar(codigousuario: number, data: UpdateSgrUsuarioDto) {
    return prisma.sgr_usuario.update({
      where: { codigousuario: codigousuario },
      data,
    });
  }

  Excluir(codigousuario: number) {
    prisma.sgr_usuario.delete({ where: { codigousuario } });
  }
}
