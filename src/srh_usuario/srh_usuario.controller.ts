import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SrhUsuarioService } from './srh_usuario.service';
import { CreateSrhUsuarioDto } from './dto/create-srh_usuario.dto';
import { UpdateSrhUsuarioDto } from './dto/update-srh_usuario.dto';

@Controller('srh-usuario')
export class SrhUsuarioController {
  constructor(private readonly SrhUsuarioService: SrhUsuarioService) {}

  @Get("ListarTodos")
  ListarTodos() {
    return this.SrhUsuarioService.ListarTodos();
  }

  @Get('BuscarPorId/:codigousuario')
  BuscarPorId(@Param('codigousuario') codigousuario: string) {
    return this.SrhUsuarioService.BuscarPorId(+codigousuario);
  }

  @Post("Salvar")
  Salvar(@Body() data: CreateSrhUsuarioDto) {
    return this.SrhUsuarioService.Salvar(data);
  }

  @Patch('Alterar/:codigousuario')
  Alterar(@Param('codigousuario') codigousuario: string, @Body() data: UpdateSrhUsuarioDto) {
    return this.SrhUsuarioService.Alterar(+codigousuario, data);
  }

  @Delete('Excluir/:codigousuario')
  Excluir(@Param('codigousuario') codigousuario: string) {
    return this.SrhUsuarioService.Excluir(+codigousuario);
  }
}
