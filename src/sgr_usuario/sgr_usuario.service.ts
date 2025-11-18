import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSgrUsuarioDto } from './dto/create-sgr_usuario.dto';
import { UpdateSgrUsuarioDto } from './dto/update-sgr_usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
   return this.prisma.sgr_usuario.create({ data });
  }

  Alterar(codigousuario: number, data: UpdateSgrUsuarioDto) {
    return this.prisma.sgr_usuario.update({
      where: { codigousuario: codigousuario },
      data,
    });
  }

  Excluir(codigousuario: number) {
    this.prisma.sgr_usuario.delete({ where: { codigousuario } });
  }
}
