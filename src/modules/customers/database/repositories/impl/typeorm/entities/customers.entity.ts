import { Addresses } from '@/modules/addresses/database/repositories/impl/typeorm/entities/addresses.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  phone: string

  @ManyToOne(
    () => Addresses, 
    { 
      onUpdate: 'CASCADE',
      nullable: false,
      eager: true
    }
  )
  @JoinColumn({ name: 'address_id' })
  address: Addresses
}