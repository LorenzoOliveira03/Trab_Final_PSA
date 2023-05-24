import { Body, Controller, Post } from "@nestjs/common";

@Controller('/funcionario')
export class CriarFuncionarioController {
//   constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  async criarFuncionario(@Body() funcionario: Funcionario) {
    return this.funcionarioService.criarFuncionario(funcionario);
  }
}
