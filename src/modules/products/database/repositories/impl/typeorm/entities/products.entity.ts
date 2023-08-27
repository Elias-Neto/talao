import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  code: string

  @Column('decimal', { precision: 10, scale: 2 })
  price: number
}