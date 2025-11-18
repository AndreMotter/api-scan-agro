import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSgrCulturaDto } from './dto/create-sgr_cultura.dto';
import { UpdateSgrCulturaDto } from './dto/update-sgr_cultura.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const sgrCulturaSchema = z.object({
  nome: z.string().min(1),
  nomecientifico: z.string().optional().nullable(),
  descricao: z.string().optional().nullable(),
  correferencia: z.string().optional().nullable(),
  imagem: z.string().optional().nullable(),
  situacao: z.boolean().optional().default(true),
});

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
   const sgr_cultura = sgrCulturaSchema.parse(data);
   return this.prisma.sgr_cultura.create({ data: sgr_cultura });
  }

  Alterar(codigocultura: number, data: UpdateSgrCulturaDto) {
    const sgr_cultura = sgrCulturaSchema.parse(data);
    return this.prisma.sgr_cultura.update({
      where: { codigocultura: codigocultura },
      data: sgr_cultura,
    });
  }

  Excluir(codigocultura: number) {
    this.prisma.sgr_cultura.delete({ where: { codigocultura } });
  }
}
