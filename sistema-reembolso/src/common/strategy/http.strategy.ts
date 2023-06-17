import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import AuthenticationService from '../server/providers/login/authentication.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const pessoa = await this.authenticationService.authenticate(
      email,
      password,
    );
    return {
      pessoa,
    };
  }
}
