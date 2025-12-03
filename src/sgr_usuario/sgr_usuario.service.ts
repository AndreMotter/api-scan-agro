import { Injectable, UnauthorizedException} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';
import { JwtService } from '@nestjs/jwt';

export const sgrUsuarioSchema = z.object({
  login: z.string(),
  senha: z.string(),
});

@Injectable()
export class SgrUsuarioService {

  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  
  async Login(login: string, senha: string) {
  
      const usuario = await this.prisma.sgr_usuario.findFirst({
        where: { login: login },
      });
  
      if (!usuario) {
        throw new UnauthorizedException("Usuário ou senha inválidos");
      }
  
      if (usuario.senha !== senha) {
        throw new UnauthorizedException("Usuário ou senha inválidos");
      }
  
      const payload = { codigousuario: usuario.codigousuario, login: usuario.login };
  
      const token = await this.jwt.signAsync(payload);
  
      return { 
          access_token: token,
          usuario: usuario.login
       };
    }

  async ListarTodos() {
    return await this.prisma.sgr_usuario.findMany();
  }

  async BuscarPorId(codigousuario: number) {
     return await this.prisma.sgr_usuario.findUnique({
      where: { codigousuario: codigousuario },
    });
  }

  async Salvar(data: any) {
   const sgr_usuario = sgrUsuarioSchema.parse(data);
   return await this.prisma.sgr_usuario.create({ data: sgr_usuario });
  }

  async Alterar(codigousuario: number, data: any) {
    const sgr_usuario = sgrUsuarioSchema.parse(data);
    return await this.prisma.sgr_usuario.update({
      where: { codigousuario: codigousuario },
      data: sgr_usuario,
    });
  }

  async Excluir(codigousuario: number) {
    await this.prisma.sgr_usuario.delete({ where: { codigousuario } });
  }
}
