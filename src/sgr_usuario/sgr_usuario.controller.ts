import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SgrUsuarioService } from './sgr_usuario.service';
import { CreateSgrUsuarioDto } from './dto/create-sgr_usuario.dto';
import { UpdateSgrUsuarioDto } from './dto/update-sgr_usuario.dto';

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
  Salvar(@Body() data: CreateSgrUsuarioDto) {
    return this.sgrUsuarioService.Salvar(data);
  }

  @Patch('Alterar/:codigousuario')
  Alterar(@Param('codigousuario') codigousuario: string, @Body() data: UpdateSgrUsuarioDto) {
    return this.sgrUsuarioService.Alterar(+codigousuario, data);
  }

  @Delete('Excluir/:codigousuario')
  Excluir(@Param('codigousuario') codigousuario: string) {
    return this.sgrUsuarioService.Excluir(+codigousuario);
  }
}
