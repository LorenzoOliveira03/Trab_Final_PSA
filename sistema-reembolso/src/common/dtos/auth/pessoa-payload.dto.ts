export class PessoaPayloadDTO {
  readonly id: string;
  readonly email: string;
  readonly profile: string;

  readonly iat?: number;
  readonly exp?: number;
}
