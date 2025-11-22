import { Module } from '@nestjs/common';
import { SrhLeituraService } from './srh_leitura.service';
import { SrhLeituraController } from './srh_leitura.controller';

@Module({
  controllers: [SrhLeituraController],
  providers: [SrhLeituraService],
})
export class SrhLeituraModule {}
