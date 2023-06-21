import { Controller, Post, Body } from '@nestjs/common';
import { IsPublic } from '../../../decorators/is-public.decorator';
import { LoginGerenteDTO } from '../../../dtos/auth/login-gerente.dto';
import { AuthenticateGerenteService } from '../../providers/login/authenticate-gerente.service';

@Controller('/login/gerente')
export class AuthenticateGerenteController {
  constructor(private readonly service: AuthenticateGerenteService) {}

  @IsPublic()
  @Post()
  async authenticateGerente(@Body() body: LoginGerenteDTO) {
    return await this.service.authenticateGerente(body);
  }
}
