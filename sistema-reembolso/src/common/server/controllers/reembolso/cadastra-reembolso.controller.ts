import { Body, Controller, Post } from '@nestjs/common';
import { CadastraReembolsoService } from '../../providers/reembolso/cadastra-reembolso.service';
import { CreateReembolsoDTO } from '../../../dtos/reembolso/create-reembolso.dto';
import { IsPublic } from '../../../decorators/is-public.decorator';

@Controller('/reembolso')
export class CadastraReembolsoController {
  constructor(private readonly service: CadastraReembolsoService) {}

  @IsPublic()
  @Post()
  async cadastrarReembolso(@Body() body: CreateReembolsoDTO) {
    return await this.service.cadastrarReembolso(body);
  }
}
