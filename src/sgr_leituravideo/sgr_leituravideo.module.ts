import { Module } from '@nestjs/common';
import { SgrLeituraVideoService } from './sgr_leituravideo.service';
import { SgrLeituraVideoController } from './sgr_leituravideo.controller';

@Module({
  controllers: [SgrLeituraVideoController],
  providers: [SgrLeituraVideoService],
})
export class SgrLeituraVideoModule {}
