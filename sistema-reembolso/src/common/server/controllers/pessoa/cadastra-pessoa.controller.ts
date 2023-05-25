import { Body, Controller, Post } from '@nestjs/common';
import { CadastraPessoaService } from '../../providers/pessoa/cadastra-pessoa.service';
import CreatePessoaDTO from '../../../dtos/pessoa/create-pessoa.dto';

@Controller('/pessoa')
export class CadastraPessoaController {
  constructor(private readonly service: CadastraPessoaService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDTO) {
    const pessoa = await this.service.create(createPessoaDto);
    return pessoa;
  }
}
