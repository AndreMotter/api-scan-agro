import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const SrhLeituraSchema = z.object({
  codigoservidor: z.number().int().positive(),
  datahora: z.string().datetime(), 
  valor: z.number(),      
  unidade: z.string().min(1),
});

@Injectable()
export class SrhLeituraService {

  constructor(private prisma: PrismaService) {}
  
  async ListarTodos() {
    return await this.prisma.srh_leitura.findMany();
  }

  async BuscarPorId(codigoleitura: number) {
     return await this.prisma.srh_leitura.findUnique({
      where: { codigoleitura: codigoleitura },
    });
  }

  async Salvar(data: any) {
   const srh_leitura = SrhLeituraSchema.parse(data);
   return await this.prisma.srh_leitura.create({ data: srh_leitura });
  }

  async Alterar(codigoleitura: number, data: any) {
    const srh_leitura = SrhLeituraSchema.parse(data);
    return await this.prisma.srh_leitura.update({
      where: { codigoleitura: codigoleitura },
      data: srh_leitura,
    });
  }

  async Excluir(codigoleitura: number) {
    await this.prisma.srh_leitura.delete({ where: { codigoleitura } });
  }
}
