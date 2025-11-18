import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSgrCulturaDto } from './dto/create-sgr_cultura.dto';
import { UpdateSgrCulturaDto } from './dto/update-sgr_cultura.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class SgrCulturaService {

  constructor(private prisma: PrismaService) {}
  
  ListarTodos() {
    return this.prisma.sgr_cultura.findMany();
  }

  BuscarPorId(codigocultura: number) {
     return this.prisma.sgr_cultura.findUnique({
      where: { codigocultura: codigocultura },
    });
  }

  Salvar(data: CreateSgrCulturaDto) {
   return this.prisma.sgr_cultura.create({ data });
  }

  Alterar(codigocultura: number, data: UpdateSgrCulturaDto) {
    return this.prisma.sgr_cultura.update({
      where: { codigocultura: codigocultura },
      data,
    });
  }

  Excluir(codigocultura: number) {
    this.prisma.sgr_cultura.delete({ where: { codigocultura } });
  }
}
