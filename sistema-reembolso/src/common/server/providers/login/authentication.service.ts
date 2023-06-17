import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { RetornaPessoaPorEmailService } from '../pessoa/retorna-pessoa-por-email.service';
import { Pessoa } from '@prisma/client';

@Injectable()
export default class AuthenticationService {
  constructor(
    private readonly pessoaService: RetornaPessoaPorEmailService,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(email: string, password: string) {
    try {
      const auth: Pessoa = await this.pessoaService.retornaPessoaPorEmail(
        email,
      );
      if (auth) {
        const isValid = await compare(password, auth.password);

        if (isValid) {
          return {
            ...auth,
            password: undefined,
          };
        }
      }
      throw new HttpException('Unauthorized', 401);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      console.log(error);
      throw new Error('Error in findUserByEmailService');
    }
  }
}
