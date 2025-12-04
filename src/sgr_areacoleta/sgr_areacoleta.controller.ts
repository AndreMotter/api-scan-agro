import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SgrAreaColetaService } from './sgr_areacoleta.service';

@Controller('sgr-areacoleta')
export class SgrAreaColetaController {
  constructor(private readonly SgrAreaColetaService: SgrAreaColetaService) {}

  @Get("ListarTodos")
  ListarTodos() {
    return this.SgrAreaColetaService.ListarTodos();
  }

  @Get('BuscarPorId/:codigoareacoleta')
  BuscarPorId(@Param('codigoareacoleta') codigoareacoleta: string) {
    return this.SgrAreaColetaService.BuscarPorId(+codigoareacoleta);
  }

  @Post("Salvar")
  Salvar(@Body() data: any) {
    return this.SgrAreaColetaService.Salvar(data);
  }

  @Patch('Alterar/:codigoareacoleta')
  Alterar(@Param('codigoareacoleta') codigoareacoleta: string, @Body() data: any) {
    return this.SgrAreaColetaService.Alterar(+codigoareacoleta, data);
  }

  @Delete('Excluir/:codigoareacoleta')
  Excluir(@Param('codigoareacoleta') codigoareacoleta: string) {
    return this.SgrAreaColetaService.Excluir(+codigoareacoleta);
  }
}
