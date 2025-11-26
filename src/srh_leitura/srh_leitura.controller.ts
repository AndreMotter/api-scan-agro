import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SrhLeituraService } from './srh_leitura.service';

@Controller('srh-leitura')
export class SrhLeituraController {
  constructor(private readonly SrhLeituraService: SrhLeituraService) {}

  @Get("ListarTodos")
  ListarTodos() {
    return this.SrhLeituraService.ListarTodos();
  }

  @Get('BuscarPorId/:codigoleitura')
  BuscarPorId(@Param('codigoleitura') codigoleitura: string) {
    return this.SrhLeituraService.BuscarPorId(+codigoleitura);
  }

  @Post("Salvar")
  Salvar(@Body() data: any) {
    return this.SrhLeituraService.Salvar(data);
  }

  @Patch('Alterar/:codigoleitura')
  Alterar(@Param('codigoleitura') codigoleitura: string, @Body() data: any) {
    return this.SrhLeituraService.Alterar(+codigoleitura, data);
  }

  @Delete('Excluir/:codigoleitura')
  Excluir(@Param('codigoleitura') codigoleitura: string) {
    return this.SrhLeituraService.Excluir(+codigoleitura);
  }

  @Get('TestarApi')
  TestarApi() {
    return 'Tudo funcionando João, mete bala';
  }
}
