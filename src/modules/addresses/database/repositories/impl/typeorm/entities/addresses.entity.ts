import { Customers } from '@/modules/customers/database/repositories/impl/typeorm/entities/customers.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class Addresses {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  city: string

  @Column()
  state: string
}