import { Module } from '@nestjs/common';
import { SgrCulturaModule } from './sgr_cultura/sgr_cultura.module';
import { SgrUsuarioModule } from './sgr_usuario/sgr_usuario.module';

@Module({
  imports: [SgrCulturaModule, SgrUsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
