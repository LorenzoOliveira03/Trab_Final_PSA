import { Controller, Get } from '@nestjs/common';
import { ListaReembolsoPendenteService } from '../../providers/reembolso/lista-reembolso-pendente.service';
import { IsPublic } from '../../../decorators/is-public.decorator';

@Controller('/reembolso/pendente')
export class ListaReembolsoPendenteController {
  constructor(private readonly service: ListaReembolsoPendenteService) {}

  @IsPublic()
  @Get()
  async listaReembolsoPendente() {
    return await this.service.listaReembolsoPendente();
  }
}
