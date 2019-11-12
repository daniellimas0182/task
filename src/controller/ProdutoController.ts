import { Request } from 'express';
import { Produto } from "../entity/Produto";
import { BaseController } from "./BaseController";

export class ProdutoController extends BaseController<Produto> {

  constructor() {
    super(Produto, true);
  }

  async save(request: Request) {
    let _produto = <Produto>request.body;
    super.isRequired(_produto.nome, 'O nome da categoria é obrigatório');
    super.isRequired(_produto.quantidade, 'O Quantidade da categoria é obrigatório');
    super.isRequired(_produto.valorUnitario, 'O valor unitario da categoria é obrigatório');

    return super.save(_produto, request);
  }

}