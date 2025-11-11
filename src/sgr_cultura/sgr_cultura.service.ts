import { Injectable } from '@nestjs/common';
import { CreateSgrCulturaDto } from './dto/create-sgr_cultura.dto';
import { UpdateSgrCulturaDto } from './dto/update-sgr_cultura.dto';

@Injectable()
export class SgrCulturaService {
  create(createSgrCulturaDto: CreateSgrCulturaDto) {
    return 'This action adds a new sgrCultura';
  }

  findAll() {
    return `This action returns all sgrCultura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sgrCultura`;
  }

  update(id: number, updateSgrCulturaDto: UpdateSgrCulturaDto) {
    return `This action updates a #${id} sgrCultura`;
  }

  remove(id: number) {
    return `This action removes a #${id} sgrCultura`;
  }
}
