import { Module } from '@nestjs/common';
import { SevUsuarioService } from './sev_usuario.service';
import { SevUsuarioController } from './sev_usuario.controller';

@Module({
  controllers: [SevUsuarioController],
  providers: [SevUsuarioService],
})
export class SevUsuarioModule {}
