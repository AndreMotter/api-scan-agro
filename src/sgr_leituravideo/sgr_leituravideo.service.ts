import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const SgrLeituraVideoSchema = z.object({
  codigoareacoleta: z.number().int().positive(),
  codigocultura: z.number().int().positive(),
  datahora: z.string().datetime(),
  video: z.string().min(1),
  quantidade: z.number(),
});

@Injectable()
export class SgrLeituraVideoService {

  constructor(private prisma: PrismaService) {}

  async ListarTodos(area_filtrar?: number, cultura_filtrar?: number) {
    return await this.prisma.sgr_leituravideo.findMany({
       where: {
        ...(area_filtrar ? { codigoareacoleta: area_filtrar } : {}),
        ...(cultura_filtrar ? { codigocultura: cultura_filtrar } : {}),
      },
      orderBy: { codigoleituravideo: "desc" },
      include: {
         areacoleta: true,
         cultura: true,
      },
    });
  }

  async BuscarPorId(codigoleituravideo: number) {
     return await this.prisma.sgr_leituravideo.findUnique({
      where: { codigoleituravideo: codigoleituravideo },
    });
  }

  async Salvar(data: any) {
   const sgr_leituravideo = SgrLeituraVideoSchema.parse(data);
   return await this.prisma.sgr_leituravideo.create({ data: sgr_leituravideo });
  }

  async Alterar(codigoleituravideo: number, data: any) {
    const sgr_leituravideo = SgrLeituraVideoSchema.parse(data);
    return await this.prisma.sgr_leituravideo.update({
      where: { codigoleituravideo: codigoleituravideo },
      data: sgr_leituravideo,
    });
  }

  async Excluir(codigoleituravideo: number) {
    await this.prisma.sgr_leituravideo.delete({ where: { codigoleituravideo } });
  }
}
