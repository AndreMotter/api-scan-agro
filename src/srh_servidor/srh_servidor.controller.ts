import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SrhServidorService } from './srh_servidor.service';

@Controller('srh-servidor')
export class SrhServidorController {
  constructor(private readonly SrhServidorService: SrhServidorService) {}

  @Get("ListarTodos")
  ListarTodos() {
    return this.SrhServidorService.ListarTodos();
  }

  @Get('BuscarPorId/:codigoservidor')
  BuscarPorId(@Param('codigoservidor') codigoservidor: string) {
    return this.SrhServidorService.BuscarPorId(+codigoservidor);
  }

  @Post("Salvar")
  Salvar(@Body() data: any) {
    return this.SrhServidorService.Salvar(data);
  }

  @Patch('Alterar/:codigoservidor')
  Alterar(@Param('codigoservidor') codigoservidor: string, @Body() data: any) {
    return this.SrhServidorService.Alterar(+codigoservidor, data);
  }

  @Delete('Excluir/:codigoservidor')
  Excluir(@Param('codigoservidor') codigoservidor: string) {
    return this.SrhServidorService.Excluir(+codigoservidor);
  }
}
