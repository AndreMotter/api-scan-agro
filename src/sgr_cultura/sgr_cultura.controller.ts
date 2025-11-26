import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SgrCulturaService } from './sgr_cultura.service';

@Controller('sgr-cultura')
export class SgrCulturaController {
  constructor(private readonly sgrCulturaService: SgrCulturaService) {}

  @Get("ListarTodos")
  ListarTodos() {
    return this.sgrCulturaService.ListarTodos();
  }

  @Get('BuscarPorId/:codigocultura')
  BuscarPorId(@Param('codigocultura') codigocultura: string) {
    return this.sgrCulturaService.BuscarPorId(+codigocultura);
  }

  @Post("Salvar")
  Salvar(@Body() data: any) {
    return this.sgrCulturaService.Salvar(data);
  }

  @Patch('Alterar/:codigocultura')
  Alterar(@Param('codigocultura') codigocultura: string, @Body() data: any) {
    return this.sgrCulturaService.Alterar(+codigocultura, data);
  }

  @Delete('Excluir/:codigocultura')
  Excluir(@Param('codigocultura') codigocultura: string) {
    return this.sgrCulturaService.Excluir(+codigocultura);
  }
}
