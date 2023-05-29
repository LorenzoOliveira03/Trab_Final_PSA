import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/database.service';

@Injectable()
export class ListaReembolsoPendenteService {
  constructor(private readonly database: PrismaService) {}

  async listaReembolsoPendente() {
    return await this.database.reembolso.findMany({
      where: {
        isAprovado: false,
      },
    });
  }
}
