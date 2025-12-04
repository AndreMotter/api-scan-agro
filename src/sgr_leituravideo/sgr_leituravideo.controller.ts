import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SgrLeituraVideoService } from './sgr_leituravideo.service';

@Controller('sgr-leituravideo')
export class SgrLeituraVideoController {
  constructor(private readonly SgrLeituraVideoService: SgrLeituraVideoService) {}

  @Get("ListarTodos")
  ListarTodos(@Query("area") area: string, @Query("cultura") cultura: string) {
    const area_filtrar = area ? Number(area) : undefined;
    const cultura_filtrar = cultura ? Number(cultura) : undefined;
    return this.SgrLeituraVideoService.ListarTodos(area_filtrar, cultura_filtrar);
  }

  @Get('BuscarPorId/:codigoleituravideo')
  BuscarPorId(@Param('codigoleituravideo') codigoleituravideo: string) {
    return this.SgrLeituraVideoService.BuscarPorId(+codigoleituravideo);
  }

  @Post("Salvar")
  Salvar(@Body() data: any) {
    return this.SgrLeituraVideoService.Salvar(data);
  }

  @Patch('Alterar/:codigoleituravideo')
  Alterar(@Param('codigoleituravideo') codigoleituravideo: string, @Body() data: any) {
    return this.SgrLeituraVideoService.Alterar(+codigoleituravideo, data);
  }

  @Delete('Excluir/:codigoleituravideo')
  Excluir(@Param('codigoleituravideo') codigoleituravideo: string) {
    return this.SgrLeituraVideoService.Excluir(+codigoleituravideo);
  }
}
