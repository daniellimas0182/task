import { ProdutoController } from "./controller/ProdutoController";
import { VendaController } from './controller/VendaController';
import { ClienteController } from './controller/ClienteController';


export const Routes = [

//cliente
    { method: "get", route: "/cliente", controller: ClienteController, action: "all" },
    { method: "get", route: "/cliente/:id", controller: ClienteController, action: "one" },
    { method: "post", route: "/cliente", controller: ClienteController, action: "save" },
    { method: "post", route: "/cliente/create", controller: ClienteController, action: "createCliente" },
    { method: "delete", route: "/cliente/:id", controller: ClienteController, action: "remove" },

//Produto
    { method: "get", route: "/produto", controller: ProdutoController, action: "all" },
    { method: "get", route: "/produto/:id", controller: ProdutoController, action: "one" },
    { method: "post", route: "/produto", controller: ProdutoController, action: "save" },
    { method: "delete", route: "/produto/:id", controller: ProdutoController, action: "remove" },

//Venda
    { method: "get", route: "/venda", controller: VendaController, action: "all" },
    { method: "get", route: "/venda/:id", controller: VendaController, action: "one" },
    { method: "post", route: "/venda", controller: VendaController, action: "save" },
    { method: "delete", route: "/venda/:id", controller: VendaController, action: "remove" }


];