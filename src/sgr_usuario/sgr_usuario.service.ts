import { Injectable } from '@nestjs/common';
import { CreateSgrUsuarioDto } from './dto/create-sgr_usuario.dto';
import { UpdateSgrUsuarioDto } from './dto/update-sgr_usuario.dto';

@Injectable()
export class SgrUsuarioService {
  create(createSgrUsuarioDto: CreateSgrUsuarioDto) {
    return 'This action adds a new sgrUsuario';
  }

  findAll() {
    return `This action returns all sgrUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sgrUsuario`;
  }

  update(id: number, updateSgrUsuarioDto: UpdateSgrUsuarioDto) {
    return `This action updates a #${id} sgrUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} sgrUsuario`;
  }
}
