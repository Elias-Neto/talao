import { Customers } from '@/modules/customers/database/repositories/impl/typeorm/entities/customers.entity'
import { Orders } from '@/modules/orders/database/repositories/impl/typeorm/entities/orders.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm'

@Entity()
export class Purchases {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(
    () => Customers, 
    { 
      onUpdate: 'CASCADE',
      nullable: false,
      eager: true
    }
  )
  @JoinColumn({ name: 'customer_id' })
  customer: Customers

  @ManyToMany(
    () => Orders, 
    { 
      onUpdate: 'CASCADE',
      eager: true,
      cascade: true
    }
  )
  @JoinTable()
  orders: Orders[]

  @Column()
  total: number

  @Column()
  amount_paid: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ type: 'timestamp', nullable: true })
  finished_at: Date
}