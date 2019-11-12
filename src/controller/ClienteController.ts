import { Request } from 'express';
import { Cliente } from '../entity/Cliente';
import { BaseController } from "./BaseController";
import * as md5 from 'md5';

export class ClienteController extends BaseController<Cliente> {

  constructor() {
    super(Cliente, true);
  }

  async save(request: Request) {
    let _Cliente = <Cliente>request.body;

    super.isRequired(_Cliente.name, 'O nome é obrigatório');
    super.isRequired(_Cliente.phone, 'Telefone é obrigatório');

    return super.save(_Cliente, request);

  }

  async createCliente(request: Request) {
    let _Cliente = <Cliente>request.body;
    let { confirmPassword } = request.body;

    super.isRequired(_Cliente.name, 'O nome é obrigatório');
    super.isRequired(_Cliente.phone, 'Telefone é obrigatório');

    return super.save(_Cliente, request, true);
  }

}