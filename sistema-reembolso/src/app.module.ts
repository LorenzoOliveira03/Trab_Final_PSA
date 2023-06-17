import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { PessoaModule } from './modules/pessoa.module';
import { ReembolsoModule } from './modules/reembolso.module';
import { AuthModule } from './modules/auth.module';
import { JwtAuthGuard } from './common/guard/jwt-auth.guard';
import { HttpAuthGuard } from './common/guard/http-auth.guard';

@Module({
  imports: [DatabaseModule, PessoaModule, ReembolsoModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: HttpAuthGuard,
    },
  ],
})
export class AppModule {}
