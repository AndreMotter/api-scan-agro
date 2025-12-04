import { Module } from '@nestjs/common';
import { SgrAreaColetaService } from './sgr_areacoleta.service';
import { SgrAreaColetaController } from './sgr_areacoleta.controller';

@Module({
  controllers: [SgrAreaColetaController],
  providers: [SgrAreaColetaService],
})
export class SgrAreaColetaModule {}
