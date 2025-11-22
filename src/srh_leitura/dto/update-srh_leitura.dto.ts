import { PartialType } from '@nestjs/swagger';
import { CreateSrhLeituraDto } from './create-srh_leitura.dto';

export class UpdateSrhLeituraDto extends PartialType(CreateSrhLeituraDto) {}
