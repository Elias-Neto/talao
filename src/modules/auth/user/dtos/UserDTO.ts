export class UserDTO {
    id: number
    email: string
    password: string
}

export type CreateUserDTO = Omit<UserDTO, 'id'>
export type UpdateUserDTO = Partial<UserDTO>
