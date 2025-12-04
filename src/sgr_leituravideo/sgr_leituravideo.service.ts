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

  async ListarTodos() {
    return await this.prisma.sgr_leituravideo.findMany();
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
