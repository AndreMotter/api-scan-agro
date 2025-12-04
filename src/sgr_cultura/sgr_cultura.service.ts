import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const sgrCulturaSchema = z.object({
  nome: z.string().min(1),
  nomecientifico: z.string().optional().nullable(),
  descricao: z.string().optional().nullable(),
  correferencia: z.string().optional().nullable(),
  imagem: z.string().optional().nullable(),
});

@Injectable()
export class SgrCulturaService {

  constructor(private prisma: PrismaService) {}
  
  async ListarTodos() {
    return await this.prisma.sgr_cultura.findMany();
  }

  async BuscarPorId(codigocultura: number) {
     return await this.prisma.sgr_cultura.findUnique({
      where: { codigocultura: codigocultura },
    });
  }

  async Salvar(data: any) {
   const sgr_cultura = sgrCulturaSchema.parse(data);
   return await this.prisma.sgr_cultura.create({ data: sgr_cultura });
  }

  async Alterar(codigocultura: number, data: any) {
    const sgr_cultura = sgrCulturaSchema.parse(data);
    return await this.prisma.sgr_cultura.update({
      where: { codigocultura: codigocultura },
      data: sgr_cultura,
    });
  }

  async Excluir(codigocultura: number) {
    await this.prisma.sgr_cultura.delete({ where: { codigocultura } });
  }
}
