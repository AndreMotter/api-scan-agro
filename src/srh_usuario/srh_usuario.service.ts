import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { z } from 'zod';
import { JwtService } from '@nestjs/jwt';

export const SrhUsuarioSchema = z.object({
  login: z.string(),
  senha: z.string(),
});

@Injectable()
export class SrhUsuarioService {

  constructor(private prisma: PrismaService, private jwt: JwtService ) {}
  
  async Login(login: string, senha: string) {

    const usuario = await this.prisma.srh_usuario.findFirst({
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
    return await this.prisma.srh_usuario.findMany();
  }

  async BuscarPorId(codigousuario: number) {
     return await this.prisma.srh_usuario.findUnique({
      where: { codigousuario: codigousuario },
    });
  }

  async Salvar(data: any) {
   const srh_usuario = SrhUsuarioSchema.parse(data);
   return await this.prisma.srh_usuario.create({ data: srh_usuario });
  }

  async Alterar(codigousuario: number, data: any) {
    const srh_usuario = SrhUsuarioSchema.parse(data);
    return await this.prisma.srh_usuario.update({
      where: { codigousuario: codigousuario },
      data: srh_usuario,
    });
  }

  async Excluir(codigousuario: number) {
    await this.prisma.srh_usuario.delete({ where: { codigousuario } });
  }
}
