import { Module } from '@nestjs/common';
import { CadastraReembolsoController } from '../common/server/controllers/reembolso/cadastra-reembolso.controller';
import { CadastraReembolsoService } from '../common/server/providers/reembolso/cadastra-reembolso.service';
import { DatabaseModule } from './database.module';
import { ListaReembolsoPendenteController } from '../common/server/controllers/reembolso/lista-reembolso-pendente.controller';
import { ListaReembolsoPendenteService } from '../common/server/providers/reembolso/lista-reembolso-pendente.service';

@Module({
  controllers: [CadastraReembolsoController, ListaReembolsoPendenteController],
  providers: [CadastraReembolsoService, ListaReembolsoPendenteService],
  imports: [DatabaseModule],
  exports: [],
})
export class ReembolsoModule {}
