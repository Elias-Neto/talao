export class Crud2DTO {
    id: number
    field1: string
    field2: string
    field3: string
}

export type CreateCrud2DTO = Omit<Crud2DTO, 'id'>
export type UpdateCrud2DTO = Partial<Crud2DTO>
