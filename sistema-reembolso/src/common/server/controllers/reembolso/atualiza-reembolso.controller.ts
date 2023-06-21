import { Body, Controller, Put } from '@nestjs/common';
import { UpdateReembolsoDTO } from '../../../dtos/reembolso/update-reembolso.dto';
import { UpdateReembolsoService } from '../../providers/reembolso/atualiza-reembolso.service';
import { IsPublic } from '../../../decorators/is-public.decorator';

@Controller('/reembolso/gerente')
export class UpdateReembolsoController {
  constructor(private readonly service: UpdateReembolsoService) {}

  @IsPublic()
  @Put()
  async update(@Body() body: UpdateReembolsoDTO) {
    return await this.service.update(body);
  }
}
