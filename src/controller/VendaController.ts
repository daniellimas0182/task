import { Request } from 'express';
import { BaseController } from "./BaseController";
import { Venda } from '../entity/Venda';

export class VendaController extends BaseController<Venda> {

  constructor() {
    super(Venda);
  }

  async save(request: Request) {
    let _Venda = <Venda>request.body;
    
    super.isRequired(_Venda.Produto, 'O Produto é obrigatória');
    super.isRequired(_Venda.Cliente, 'O Cliente é obrigatória');
    super.isRequired(_Venda.quantidade, 'O Quintidade é obrigatória');
  

    return super.save(_Venda, request);
  }

}