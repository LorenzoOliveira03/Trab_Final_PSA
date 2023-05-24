export class FuncionarioDTO {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  reembolsos: ReembolsoDTO[];
}
