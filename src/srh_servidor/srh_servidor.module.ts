import { Module } from '@nestjs/common';
import { SrhServidorService } from './srh_servidor.service';
import { SrhServidorController } from './srh_servidor.controller';

@Module({
  controllers: [SrhServidorController],
  providers: [SrhServidorService],
})
export class SrhServidorModule {}
