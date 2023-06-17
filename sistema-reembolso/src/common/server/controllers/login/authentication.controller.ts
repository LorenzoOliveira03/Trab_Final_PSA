import { Post, UseGuards, Request, Controller } from '@nestjs/common';
import { AuthRequestDTO } from 'src/common/dtos/auth/auth-request.dto';
import { HttpAuthGuard } from 'src/common/guard/http-auth.guard';
import { IsPublic } from 'src/common/decorators/is-public.decorator';
import LoginService from '../../providers/login/login.service';

@IsPublic()
@Controller('/login')
export class AuthenticationController {
  constructor(private readonly loginService: LoginService) {}

  @IsPublic()
  @UseGuards(HttpAuthGuard)
  @Post()
  async authenticate(@Request() req: AuthRequestDTO) {
    try {
      console.log(req.user);
      const { accessToken } = await this.loginService.login(req.user);
      console.log(accessToken);
      return {
        accessToken,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
