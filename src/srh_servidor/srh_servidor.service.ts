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
  
  ListarTodos() {
    return this.prisma.srh_servidor.findMany();
  }

  BuscarPorId(codigoservidor: number) {
     return this.prisma.srh_servidor.findUnique({
      where: { codigoservidor: codigoservidor },
    });
  }

  Salvar(data: any) {
   const srh_servidor = SrhServidorSchema.parse(data);
   return this.prisma.srh_servidor.create({ data: srh_servidor });
  }

  Alterar(codigoservidor: number, data: any) {
    const srh_servidor = SrhServidorSchema.parse(data);
    return this.prisma.srh_servidor.update({
      where: { codigoservidor: codigoservidor },
      data: srh_servidor,
    });
  }

  Excluir(codigoservidor: number) {
    this.prisma.srh_servidor.delete({ where: { codigoservidor } });
  }
}
