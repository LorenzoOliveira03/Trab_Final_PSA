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
import { AuthenticateGerenteController } from '../common/server/controllers/login/authenticate-gerente.controller';
import { AuthenticateGerenteService } from '../common/server/providers/login/authenticate-gerente.service';
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
  controllers: [AuthenticationController, AuthenticateGerenteController],
  providers: [
    LoginService,
    AuthenticationService,
    JwtService,
    RetornaPessoaPorEmailService,
    HttpStrategy,
    AuthenticateGerenteService,
  ],
})
export class AuthModule {}
