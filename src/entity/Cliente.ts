import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";

@Entity({ name: 'Cliente' })
export class Cliente extends BaseEntity {


  @Column({ type: 'varchar', length: 200 })
  name: string
  
  @Column({ type: 'varchar', length: 200 })
  cpf: number

  @Column({ type: 'varchar', length: 200 })
  cnpj: number

  @Column({ type: 'varchar', length: 50 })
  phone: string

}