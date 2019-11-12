import { Produto } from './Produto';
import { Cliente } from './Cliente';
import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";

@Entity({ name: 'Venda' })
export class Venda extends BaseEntity {

  @Column({ type: "varchar", length: 100, nullable: true })
  valorTotal: number

  @Column({ type: "varchar", length: 1000, nullable: true })
  quantidadeEstoqui: number

  @Column({ type: "varchar", length: 1000, nullable: true })
  quantidade: number
  
  @Column({ type: "varchar", nullable: true })
  data: Date

  @Column({ type: 'varchar', length: 1000, nullable: true })
  description: string

  @ManyToOne(() => Produto, { eager: true }) 
  Produto: Produto

  @ManyToOne(() => Cliente, { eager: true }) 
  Cliente: Cliente

}
