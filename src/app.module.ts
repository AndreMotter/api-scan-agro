import { Module } from '@nestjs/common';
import { SgrCulturaModule } from './sgr_cultura/sgr_cultura.module';
import { SgrUsuarioModule } from './sgr_usuario/sgr_usuario.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SgrCulturaModule, SgrUsuarioModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
