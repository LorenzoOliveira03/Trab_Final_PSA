import { Controller, Get } from '@nestjs/common';
import { ListaReembolsoPendenteService } from '../../providers/reembolso/lista-reembolso-pendente.service';

@Controller('/reembolso/pendente')
export class ListaReembolsoPendenteController {
  constructor(private readonly service: ListaReembolsoPendenteService) {}

  @Get()
  async listaReembolsoPendente() {
    return await this.service.listaReembolsoPendente();
  }
}
