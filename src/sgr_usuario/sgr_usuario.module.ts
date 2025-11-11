import { Module } from '@nestjs/common';
import { SgrUsuarioService } from './sgr_usuario.service';
import { SgrUsuarioController } from './sgr_usuario.controller';

@Module({
  controllers: [SgrUsuarioController],
  providers: [SgrUsuarioService],
})
export class SgrUsuarioModule {}
