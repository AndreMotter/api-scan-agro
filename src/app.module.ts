import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SgrCulturaModule } from './sgr_cultura/sgr_cultura.module';
import { SgrUsuarioModule } from './sgr_usuario/sgr_usuario.module';
import { SgrAreaColetaModule } from './sgr_areacoleta/sgr_areacoleta.module';
import { SgrLeituraVideoModule } from './sgr_leituravideo/sgr_leituravideo.module';
import { SrhLeituraModule } from './srh_leitura/srh_leitura.module';
import { SrhUsuarioModule } from './srh_usuario/srh_usuario.module';
import { SrhServidorModule } from './srh_servidor/srh_servidor.module';
import { JwtAuthMiddleware } from './middleware/jwt.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'ZOr9aDeuOCuHdlgFiKlIrrqHOKBamiQps40lKFI0dCG',
      signOptions: { expiresIn: '1h' },
    }),
    SgrCulturaModule,
    SgrUsuarioModule,
    SgrAreaColetaModule,
    SgrLeituraVideoModule,
    SrhLeituraModule,
    SrhUsuarioModule,
    SrhServidorModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtAuthMiddleware).forRoutes('*');
  }
}
