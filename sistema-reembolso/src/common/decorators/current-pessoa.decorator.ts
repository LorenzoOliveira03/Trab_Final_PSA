import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Pessoa } from '@prisma/client';
import { AuthRequestDTO } from 'src/common/dtos/auth/auth-request.dto';

export const CurrentPessoa = createParamDecorator(
  (_data: unknown, context: ExecutionContext): Pessoa => {
    const request = context.switchToHttp().getRequest<AuthRequestDTO>();

    return request.user;
  },
);
