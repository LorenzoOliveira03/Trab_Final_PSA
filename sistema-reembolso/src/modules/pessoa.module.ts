import { Module } from '@nestjs/common';
import { CadastraPessoaController } from '../common/server/controllers/pessoa/cadastra-pessoa.controller';
import { CadastraPessoaService } from '../common/server/providers/pessoa/cadastra-pessoa.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CadastraPessoaController],
  providers: [CadastraPessoaService],
})
export class PessoaModule {}
