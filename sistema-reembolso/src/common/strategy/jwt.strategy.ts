import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PessoaJwtDTO } from '../dtos/auth/pessoa-jwt.dto';
import { PessoaPayloadDTO } from '../dtos/auth/pessoa-payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: PessoaPayloadDTO): Promise<PessoaJwtDTO> {
    return {
      id: payload.id,
      email: payload.email,
      profile: payload.profile,
    };
  }
}
