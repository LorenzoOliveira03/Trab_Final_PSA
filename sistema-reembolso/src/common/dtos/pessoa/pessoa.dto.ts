import { ReembolsoDTO } from '../reembolso/reembolso.dto';

export class PessoaDTO {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  profile: string;
  reembolsos: ReembolsoDTO[];
}
