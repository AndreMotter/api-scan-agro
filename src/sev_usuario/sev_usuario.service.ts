import { Injectable } from '@nestjs/common';
import { CreateSevUsuarioDto } from './dto/create-sev_usuario.dto';
import { UpdateSevUsuarioDto } from './dto/update-sev_usuario.dto';

@Injectable()
export class SevUsuarioService {
  create(createSevUsuarioDto: CreateSevUsuarioDto) {
    return 'This action adds a new sevUsuario';
  }

  findAll() {
    return `This action returns all sevUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sevUsuario`;
  }

  update(id: number, updateSevUsuarioDto: UpdateSevUsuarioDto) {
    return `This action updates a #${id} sevUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} sevUsuario`;
  }
}
