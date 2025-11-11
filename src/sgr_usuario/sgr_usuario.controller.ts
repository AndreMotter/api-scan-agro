import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SgrUsuarioService } from './sgr_usuario.service';
import { CreateSgrUsuarioDto } from './dto/create-sgr_usuario.dto';
import { UpdateSgrUsuarioDto } from './dto/update-sgr_usuario.dto';

@Controller('sgr-usuario')
export class SgrUsuarioController {
  constructor(private readonly sgrUsuarioService: SgrUsuarioService) {}

  @Post()
  create(@Body() createSgrUsuarioDto: CreateSgrUsuarioDto) {
    return this.sgrUsuarioService.create(createSgrUsuarioDto);
  }

  @Get()
  findAll() {
    return this.sgrUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sgrUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSgrUsuarioDto: UpdateSgrUsuarioDto) {
    return this.sgrUsuarioService.update(+id, updateSgrUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sgrUsuarioService.remove(+id);
  }
}
