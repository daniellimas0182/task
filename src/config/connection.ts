import { Cliente } from '../entity/Cliente';
import { Venda } from './../entity/Venda';
import { Produto } from './../entity/Produto';
import { createConnection } from "typeorm";

const cfg = require('../../ormconfig.json');

export default {
  createConnection: async () => {
    await createConnection(
      {
        type: cfg.type,
        host: cfg.host,
        port: cfg.port,
        username: cfg.username,
        password: cfg.password,
        database: cfg.database,
        synchronize: true,
        logging: false,
        entities: [
          Cliente,
          Produto,
         Venda
          
        ]
      }
    );
    console.log('Database connected');
  }
}