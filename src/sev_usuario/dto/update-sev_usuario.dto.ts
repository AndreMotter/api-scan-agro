import { PartialType } from '@nestjs/swagger';
import { CreateSevUsuarioDto } from './create-sev_usuario.dto';

export class UpdateSevUsuarioDto extends PartialType(CreateSevUsuarioDto) {}
