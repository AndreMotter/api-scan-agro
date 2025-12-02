import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';

export const SrhServidorSchema = z.object({
  nome: z.string(),
  identificador: z.string(),
});

@Injectable()
export class SrhServidorService {

  constructor(private prisma: PrismaService) {}
  
  async ListarTodos() {
    return await this.prisma.srh_servidor.findMany();
  }

  async BuscarPorId(codigoservidor: number) {
     return await this.prisma.srh_servidor.findUnique({
      where: { codigoservidor: codigoservidor },
    });
  }

  async Salvar(data: any) {
   const srh_servidor = SrhServidorSchema.parse(data);
   return await this.prisma.srh_servidor.create({ data: srh_servidor });
  }

  async Alterar(codigoservidor: number, data: any) {
    const srh_servidor = SrhServidorSchema.parse(data);
    return await this.prisma.srh_servidor.update({
      where: { codigoservidor: codigoservidor },
      data: srh_servidor,
    });
  }

  async Excluir(codigoservidor: number) {
    await this.prisma.srh_servidor.delete({ where: { codigoservidor } });
  }
}
