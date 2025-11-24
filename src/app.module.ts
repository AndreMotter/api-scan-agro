import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SgrCulturaModule } from './sgr_cultura/sgr_cultura.module';
import { SgrUsuarioModule } from './sgr_usuario/sgr_usuario.module';
import { SrhLeituraModule } from './srh_leitura/srh_leitura.module';

@Module({
  imports: [SgrCulturaModule, SgrUsuarioModule, SrhLeituraModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
