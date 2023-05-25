import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { PessoaModule } from './modules/pessoa.module';

@Module({
  imports: [DatabaseModule, PessoaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
