import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { PessoaModule } from './modules/pessoa.module';
import { ReembolsoModule } from './modules/reembolso.module';

@Module({
  imports: [DatabaseModule, PessoaModule, ReembolsoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
