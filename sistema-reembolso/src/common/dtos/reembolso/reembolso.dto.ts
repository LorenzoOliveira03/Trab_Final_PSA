import { FuncionarioDTO } from '../funcionario/funcionario.dto';

export class ReembolsoDTO {
  id: string;
  nProtocolo: string;
  valorReembolso: number;
  descricao: string;
  isAprovado: boolean;
  dataCriacao: Date;
  dataConclusao?: Date;
  gerente?: GerenteDTO;
  gerenteId?: string;
  funcionario: FuncionarioDTO;
  funcionarioId: string;
}
