import { PessoaDTO } from '../pessoa/pessoa.dto';

export class ReembolsoDTO {
  id: string;
  nProtocolo: string;
  valorReembolso: number;
  descricao: string;
  isAprovado: boolean;
  dataCriacao: Date;
  dataConclusao?: Date;
  gerente?: PessoaDTO;
  gerenteId?: string;
  funcionario: PessoaDTO;
  funcionarioId: string;
}
