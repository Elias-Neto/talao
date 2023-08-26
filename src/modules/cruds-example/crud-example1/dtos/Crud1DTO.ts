export class Crud1DTO {
    id: number
    field1: string
    field2: string
    field3: string
}

export type CreateCrud1DTO = Omit<Crud1DTO, 'id'>
export type UpdateCrud1DTO = Partial<Crud1DTO>
