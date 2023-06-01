import { Controller, Get, Param } from '@nestjs/common';
import { ListaReembolsoDataService } from '../../providers/reembolso/lista-reembolso-data.service';

@Controller('reembolso/data')
export class ListaReembolsoDataController {
  constructor(private readonly service: ListaReembolsoDataService) {}

  @Get(':dataInicio/:dataFim/:isAprovado')
  async getListaReembolsoData(
    @Param('dataInicio') dataInicio: string,
    @Param('dataFim') dataFim: string,
    @Param('isAprovado') isAprovado: string,
  ) {
    return await this.service.getListaReembolsoData(dataInicio, dataFim, isAprovado);
  }
}
