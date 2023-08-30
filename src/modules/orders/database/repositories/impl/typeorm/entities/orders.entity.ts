import { Products } from '@/modules/products/database/repositories/impl/typeorm/entities/products.entity'
import { Purchases } from '@/modules/purchases/database/repositories/impl/typeorm/entities/purchases.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(
    () => Products, 
    { 
      onUpdate: 'CASCADE',
      nullable: false,
      eager: true
    }
  )
  @JoinColumn({ name: 'product_id' })
  product: Products

  // @ManyToMany(
  //   () => Purchases, 
  //   { 
  //     onUpdate: 'CASCADE',
  //     nullable: false,
  //     eager: true,
  //     // cascade: true
  //   }
  // )
  // @JoinTable()
  // purchases: Purchases[]

  @Column()
  quantity: number

  @Column('decimal', { precision: 32, scale: 2 })
  total: number
}