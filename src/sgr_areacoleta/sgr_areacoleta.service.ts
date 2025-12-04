import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const SgrAreaColetaSchema = z.object({
  nome: z.string(),
});

@Injectable()
export class SgrAreaColetaService {

  constructor(private prisma: PrismaService) {}

  async ListarTodos() {
    return await this.prisma.sgr_areacoleta.findMany();
  }

  async BuscarPorId(codigoareacoleta: number) {
     return await this.prisma.sgr_areacoleta.findUnique({
      where: { codigoareacoleta: codigoareacoleta },
    });
  }

  async Salvar(data: any) {
   const sgr_areacoleta = SgrAreaColetaSchema.parse(data);
   return await this.prisma.sgr_areacoleta.create({ data: sgr_areacoleta });
  }

  async Alterar(codigoareacoleta: number, data: any) {
    const sgr_areacoleta = SgrAreaColetaSchema.parse(data);
    return await this.prisma.sgr_areacoleta.update({
      where: { codigoareacoleta: codigoareacoleta },
      data: sgr_areacoleta,
    });
  }

  async Excluir(codigoareacoleta: number) {
    await this.prisma.sgr_areacoleta.delete({ where: { codigoareacoleta } });
  }
}
