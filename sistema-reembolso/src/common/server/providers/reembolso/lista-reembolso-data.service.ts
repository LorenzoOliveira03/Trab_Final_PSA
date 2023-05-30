import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/database.service';

@Injectable()
export class ListaReembolsoDataService {
  constructor(private readonly database: PrismaService) {}

  async getListaReembolsoData(dataInicioStr: string, dataFimStr: string) {
    const dataInicio = new Date(dataInicioStr);
    const dataFim = new Date(dataFimStr);
    return await this.database.reembolso.findMany({
      where: {
        dataCriacao: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
    });
  }
}
