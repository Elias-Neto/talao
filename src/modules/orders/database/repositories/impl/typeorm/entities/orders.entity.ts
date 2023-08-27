import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number

  @Column('decimal', { precision: 10, scale: 2 })
  price: number

  @Column()
  quantity: number

  @Column('decimal', { precision: 32, scale: 2 })
  total: number
}