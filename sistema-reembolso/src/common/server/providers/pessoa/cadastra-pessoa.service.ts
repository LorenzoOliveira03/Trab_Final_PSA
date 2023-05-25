import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/database.service';
import CreatePessoaDTO from '../../../dtos/pessoa/create-pessoa.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CadastraPessoaService {
  constructor(private readonly database: PrismaService) {}

  async create(createPessoaDto: CreatePessoaDTO) {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(createPessoaDto.senha, salt);

    const pessoa = await this.database.pessoa.create({
      data: {
        name: createPessoaDto.nome,
        email: createPessoaDto.email,
        cpf: createPessoaDto.cpf,
        profile: createPessoaDto.profile,
        password,
      },
    });

    return pessoa;
  }
}
