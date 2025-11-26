import { Module } from '@nestjs/common';
import { SrhUsuarioService } from './srh_usuario.service';
import { SrhUsuarioController } from './srh_usuario.controller';

@Module({
  controllers: [SrhUsuarioController],
  providers: [SrhUsuarioService],
})
export class SrhUsuarioModule {}
