import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SgrUsuarioService } from './sgr_usuario.service';

@Controller('sgr-usuario')
export class SgrUsuarioController {
  constructor(private readonly sgrUsuarioService: SgrUsuarioService) {}

  @Get("ListarTodos")
  ListarTodos() {
    return this.sgrUsuarioService.ListarTodos();
  }

  @Get('BuscarPorId/:codigousuario')
  BuscarPorId(@Param('codigousuario') codigousuario: string) {
    return this.sgrUsuarioService.BuscarPorId(+codigousuario);
  }

  @Post("Salvar")
  Salvar(@Body() data: any) {
    return this.sgrUsuarioService.Salvar(data);
  }

  @Patch('Alterar/:codigousuario')
  Alterar(@Param('codigousuario') codigousuario: string, @Body() data: any) {
    return this.sgrUsuarioService.Alterar(+codigousuario, data);
  }

  @Delete('Excluir/:codigousuario')
  Excluir(@Param('codigousuario') codigousuario: string) {
    return this.sgrUsuarioService.Excluir(+codigousuario);
  }
}
