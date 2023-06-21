import { Module } from '@nestjs/common';
import { CadastraReembolsoController } from '../common/server/controllers/reembolso/cadastra-reembolso.controller';
import { CadastraReembolsoService } from '../common/server/providers/reembolso/cadastra-reembolso.service';
import { DatabaseModule } from './database.module';
import { ListaReembolsoPendenteController } from '../common/server/controllers/reembolso/lista-reembolso-pendente.controller';
import { ListaReembolsoPendenteService } from '../common/server/providers/reembolso/lista-reembolso-pendente.service';
import { ListaReembolsoDataService } from '../common/server/providers/reembolso/lista-reembolso-data.service';
import { ListaReembolsoDataController } from '../common/server/controllers/reembolso/lista-reembolso-data.controller';
import { UpdateReembolsoService } from '../common/server/providers/reembolso/atualiza-reembolso.service';
import { UpdateReembolsoController } from '../common/server/controllers/reembolso/atualiza-reembolso.controller';

@Module({
  controllers: [
    CadastraReembolsoController,
    ListaReembolsoPendenteController,
    ListaReembolsoDataController,
    UpdateReembolsoController,
  ],
  providers: [
    CadastraReembolsoService,
    ListaReembolsoPendenteService,
    ListaReembolsoDataService,
    UpdateReembolsoService,
  ],
  imports: [DatabaseModule],
  exports: [],
})
export class ReembolsoModule {}
