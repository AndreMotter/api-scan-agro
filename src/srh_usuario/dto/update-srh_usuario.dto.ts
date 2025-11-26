import { PartialType } from '@nestjs/swagger';
import { CreateSrhUsuarioDto } from './create-srh_usuario.dto';

export class UpdateSrhUsuarioDto extends PartialType(CreateSrhUsuarioDto) {}
