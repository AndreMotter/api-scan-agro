import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SgrCulturaService } from './sgr_cultura.service';
import { CreateSgrCulturaDto } from './dto/create-sgr_cultura.dto';
import { UpdateSgrCulturaDto } from './dto/update-sgr_cultura.dto';

@Controller('sgr-cultura')
export class SgrCulturaController {
  constructor(private readonly sgrCulturaService: SgrCulturaService) {}

  @Get("ListarTodos")
  ListarTodos() {
    return this.sgrCulturaService.findAll();
  }

  @Get('BuscarPorId/:id')
  BuscarPorId(@Param('id') id: string) {
    return this.sgrCulturaService.findOne(+id);
  }

  @Post("Salvar")
  Salvar(@Body() createSgrCulturaDto: CreateSgrCulturaDto) {
    return this.sgrCulturaService.create(createSgrCulturaDto);
  }

  @Patch('Alterar/:id')
  Alterar(@Param('id') id: string, @Body() updateSgrCulturaDto: UpdateSgrCulturaDto) {
    return this.sgrCulturaService.update(+id, updateSgrCulturaDto);
  }

  @Delete('Excluir/:id')
  Excluir(@Param('id') id: string) {
    return this.sgrCulturaService.remove(+id);
  }
}
