import { PartialType } from '@nestjs/swagger';
import { CreateSgrCulturaDto } from './create-sgr_cultura.dto';

export class UpdateSgrCulturaDto extends PartialType(CreateSgrCulturaDto) {}
