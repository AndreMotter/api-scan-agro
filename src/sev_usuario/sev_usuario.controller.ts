import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SevUsuarioService } from './sev_usuario.service';
import { CreateSevUsuarioDto } from './dto/create-sev_usuario.dto';
import { UpdateSevUsuarioDto } from './dto/update-sev_usuario.dto';

@Controller('sev-usuario')
export class SevUsuarioController {
  constructor(private readonly sevUsuarioService: SevUsuarioService) {}

  @Post()
  create(@Body() createSevUsuarioDto: CreateSevUsuarioDto) {
    return this.sevUsuarioService.create(createSevUsuarioDto);
  }

  @Get()
  findAll() {
    return this.sevUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sevUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSevUsuarioDto: UpdateSevUsuarioDto) {
    return this.sevUsuarioService.update(+id, updateSevUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sevUsuarioService.remove(+id);
  }
}
