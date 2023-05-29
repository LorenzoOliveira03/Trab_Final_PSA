import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/database.service';
import { CreateReembolsoDTO } from '../../../dtos/reembolso/create-reembolso.dto';

@Injectable()
export class CadastraReembolsoService {
  constructor(private readonly database: PrismaService) {}
  async cadastrarReembolso(reembolso: CreateReembolsoDTO) {
    console.log(reembolso);
    const nProtocolo: number = await this.database.reembolso.count();
    const valor = Number.parseFloat(reembolso.valorReembolso.toString());

    const reembolsoCriado = await this.database.reembolso.create({
      data: {
        descricao: reembolso.descricao,
        valorReembolso: valor,
        nProtocolo: (nProtocolo + 1).toString(),
        isAprovado: false,
        funcionarioId: reembolso.funcionarioId,
        // funcionario: {
        //   connect: {
        //     id: reembolso.funcionarioId,
        //   },
        // },
      },
    });

    return reembolsoCriado;
  }
}
