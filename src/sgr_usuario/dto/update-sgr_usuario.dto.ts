import { PartialType } from '@nestjs/swagger';
import { CreateSgrUsuarioDto } from './create-sgr_usuario.dto';

export class UpdateSgrUsuarioDto extends PartialType(CreateSgrUsuarioDto) {}
