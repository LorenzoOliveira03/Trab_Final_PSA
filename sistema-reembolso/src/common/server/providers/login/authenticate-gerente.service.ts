import { PrismaService } from '../../../database/database.service';
import { LoginGerenteDTO } from '../../../dtos/auth/login-gerente.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticateGerenteService {
  constructor(private readonly database: PrismaService) {}

  async authenticateGerente(body: LoginGerenteDTO) {
    const pessoa = await this.database.pessoa.findUnique({
      where: {
        id: body.id,
      },
    });

    if (pessoa.profile === 'gerente') {
      return pessoa;
    } else {
      throw new Error('Gerente não encontrado');
    }
  }
}
