import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: any, res: any, next: () => void) {

    if (req.originalUrl.includes('/srh-usuario/Login')) {
      return next();
    }
    
    if (req.originalUrl.includes('/sgr-usuario/Login')) {
      return next();
    }

    if (req.originalUrl.includes('/srh-leitura/Salvar')) {
      return next();
    }

    if (req.originalUrl.includes('/sgr-leituravideo/Salvar')) {
      return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token não informado');
    }

    const token = authHeader.replace('Bearer ', '').trim();

    try {
      const decoded = await this.jwtService.verifyAsync(token);
      req.usuario = decoded; 
      next();
    } catch (error) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}
