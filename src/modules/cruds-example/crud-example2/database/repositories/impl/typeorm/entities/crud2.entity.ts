import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Crud2 {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    field1: string

    @Column()
    field2: string

    @Column()
    field3: string
}
