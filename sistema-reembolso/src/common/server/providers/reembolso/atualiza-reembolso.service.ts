import { PrismaService } from '../../../database/database.service';
import { UpdateReembolsoDTO } from '../../../dtos/reembolso/update-reembolso.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateReembolsoService {
  constructor(private readonly database: PrismaService) {}

  async update(body: UpdateReembolsoDTO) {
    const now = new Date(Date.now());
    const reembolso = await this.database.reembolso.update({
      where: {
        id: body.id,
      },
      data: {
        isAprovado: body.isAprovado,
        dataConclusao: now,
      },
    });

    return reembolso;
  }
}
