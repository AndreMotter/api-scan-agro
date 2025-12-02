import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SrhUsuarioService } from './srh_usuario.service';

@Controller('srh-usuario')
export class SrhUsuarioController {
  constructor(private readonly SrhUsuarioService: SrhUsuarioService) {}

  @Post("Login")
  Login(@Body() data: any) {
    return this.SrhUsuarioService.Login(data.login, data.senha);
  }

  @Get("ListarTodos")
  ListarTodos() {
    return this.SrhUsuarioService.ListarTodos();
  }

  @Get('BuscarPorId/:codigousuario')
  BuscarPorId(@Param('codigousuario') codigousuario: string) {
    return this.SrhUsuarioService.BuscarPorId(+codigousuario);
  }

  @Post("Salvar")
  Salvar(@Body() data: any) {
    return this.SrhUsuarioService.Salvar(data);
  }

  @Patch('Alterar/:codigousuario')
  Alterar(@Param('codigousuario') codigousuario: string, @Body() data: any) {
    return this.SrhUsuarioService.Alterar(+codigousuario, data);
  }

  @Delete('Excluir/:codigousuario')
  Excluir(@Param('codigousuario') codigousuario: string) {
    return this.SrhUsuarioService.Excluir(+codigousuario);
  }
}
