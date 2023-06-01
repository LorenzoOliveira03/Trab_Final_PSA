import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/database.service';
import { Reembolso } from '@prisma/client';

@Injectable()
export class ListaReembolsoDataService {
  constructor(private readonly database: PrismaService) {}

  async getListaReembolsoData(
    dataInicioStr: string,
    dataFimStr: string,
    isAprovado: string,
  ) {
    var reembolsos: Reembolso[];
    const dataInicio = new Date(dataInicioStr);
    const dataFim = new Date(dataFimStr);
    if (dataInicio && dataFim) {
      reembolsos = await this.database.reembolso.findMany({
        where: {
          dataCriacao: {
            gte: dataInicio,
            lte: dataFim,
          },
        },
      });
    } else {
      reembolsos = await this.database.reembolso.findMany();
    }

    if (isAprovado === 'true') {
      return reembolsos.filter((reembolso) => reembolso.isAprovado === true);
    } else if (isAprovado === 'false') {
      return reembolsos.filter((reembolso) => reembolso.isAprovado === false);
    } else {
      return reembolsos;
    }
  }
}
