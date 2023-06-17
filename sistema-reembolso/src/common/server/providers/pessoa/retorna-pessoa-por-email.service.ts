import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/database.service';

@Injectable()
export class RetornaPessoaPorEmailService {
  constructor(private readonly database: PrismaService) {}

  async retornaPessoaPorEmail(email: string) {
    const pessoa = await this.database.pessoa.findUnique({
      where: {
        email: email,
      },
    });
    return pessoa;
  }
}
