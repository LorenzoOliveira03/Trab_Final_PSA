import { Module } from '@nestjs/common';
import LoginService from '../common/server/providers/login/login.service';
import { AuthenticationController } from '../common/server/controllers/login/authentication.controller';
import { DatabaseModule } from './database.module';
import AuthenticationService from '../common/server/providers/login/authentication.service';
import { JwtStrategy } from '../common/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PessoaModule } from './pessoa.module';
import { RetornaPessoaPorEmailService } from '../common/server/providers/pessoa/retorna-pessoa-por-email.service';
import { HttpStrategy } from '../common/strategy/http.strategy';
@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    PessoaModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '10d' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    LoginService,
    AuthenticationService,
    JwtService,
    RetornaPessoaPorEmailService,
    HttpStrategy,
  ],
})
export class AuthModule {}
