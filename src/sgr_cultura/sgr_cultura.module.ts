import { Module } from '@nestjs/common';
import { SgrCulturaService } from './sgr_cultura.service';
import { SgrCulturaController } from './sgr_cultura.controller';

@Module({
  controllers: [SgrCulturaController],
  providers: [SgrCulturaService],
})
export class SgrCulturaModule {}
