import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";

@Entity({ name: 'Produtos' })
export class Produto extends BaseEntity {

  @Column({ type: 'varchar', length: 100 })
  nome: string

  @Column({ type: 'varchar', length: 1000 })
  descricao: string

  @Column({ type: "varchar", length: 100, nullable: true })
  quantidade: number

  @Column({ type: "varchar", length: 12, nullable: true })
  valorUnitario: number

  @Column({ type: "varchar", length: 1000, nullable: true })
  quantidadeDeEstoque: number

}