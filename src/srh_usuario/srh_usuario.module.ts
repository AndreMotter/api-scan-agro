import { Module } from '@nestjs/common';
import { SrhUsuarioService } from './srh_usuario.service';
import { SrhUsuarioController } from './srh_usuario.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
    JwtModule.register({
      secret: "ZOr9aDeuOCuHdlgFiKlIrrqHOKBamiQps40lKFI0dCG",
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [SrhUsuarioController],
  providers: [SrhUsuarioService],
})
export class SrhUsuarioModule {}
