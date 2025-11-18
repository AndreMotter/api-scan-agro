import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SgrCulturaModule } from './sgr_cultura/sgr_cultura.module';
import { SgrUsuarioModule } from './sgr_usuario/sgr_usuario.module';
import { SevUsuarioModule } from './sev_usuario/sev_usuario.module';

@Module({
  imports: [SgrCulturaModule, SgrUsuarioModule, PrismaModule, SevUsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
