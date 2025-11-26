import { Injectable } from '@nestjs/common';
import { CreateSrhUsuarioDto } from './dto/create-srh_usuario.dto';
import { UpdateSrhUsuarioDto } from './dto/update-srh_usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const SrhUsuarioSchema = z.object({
  login: z.string(),
  senha: z.string(),
});

@Injectable()
export class SrhUsuarioService {

  constructor(private prisma: PrismaService) {}
  
  ListarTodos() {
    return this.prisma.srh_usuario.findMany();
  }

  BuscarPorId(codigousuario: number) {
     return this.prisma.srh_usuario.findUnique({
      where: { codigousuario: codigousuario },
    });
  }

  Salvar(data: CreateSrhUsuarioDto) {
   const srh_usuario = SrhUsuarioSchema.parse(data);
   return this.prisma.srh_usuario.create({ data: srh_usuario });
  }

  Alterar(codigousuario: number, data: UpdateSrhUsuarioDto) {
    const srh_usuario = SrhUsuarioSchema.parse(data);
    return this.prisma.srh_usuario.update({
      where: { codigousuario: codigousuario },
      data,
    });
  }

  Excluir(codigousuario: number) {
    this.prisma.srh_usuario.delete({ where: { codigousuario } });
  }
}
