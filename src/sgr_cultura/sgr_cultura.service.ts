import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSgrCulturaDto } from './dto/create-sgr_cultura.dto';
import { UpdateSgrCulturaDto } from './dto/update-sgr_cultura.dto';

const prisma = new PrismaClient();

@Injectable()
export class SgrCulturaService {

  ListarTodos() {
    return prisma.sgr_cultura.findMany();
  }

  BuscarPorId(codigocultura: number) {
     return prisma.sgr_cultura.findUnique({
      where: { codigocultura: codigocultura },
    });
  }

  Salvar(data: CreateSgrCulturaDto) {
   return prisma.sgr_cultura.create({ data });
  }

  Alterar(codigocultura: number, data: UpdateSgrCulturaDto) {
    return prisma.sgr_cultura.update({
      where: { codigocultura: codigocultura },
      data,
    });
  }

  Excluir(codigocultura: number) {
    prisma.sgr_cultura.delete({ where: { codigocultura } });
  }
}
