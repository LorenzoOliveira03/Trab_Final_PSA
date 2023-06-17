import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Pessoa } from '@prisma/client';
import { PessoaPayloadDTO } from 'src/common/dtos/auth/pessoa-payload.dto';

@Injectable()
export default class LoginService {
  constructor(private readonly jwtService: JwtService) {}

  async login(pessoa: Pessoa) {
    try {
      const payload: PessoaPayloadDTO = {
        id: pessoa.id,
        email: pessoa.email,
        profile: pessoa.profile,
      };

      const jwtToken = this.jwtService.sign(payload);
      // const token = jwt.sign(
      //     {
      //         id: elderly.id,
      //         emai: elderly.email,
      //         profile: elderly.profile,
      //     },
      //     process.env.SECRET_KEY ?? ''
      // );
      return {
        accessToken: jwtToken,
      };
    } catch (error) {
      console.log(error);
      throw new Error('Error in loginService');
    }
  }
}
