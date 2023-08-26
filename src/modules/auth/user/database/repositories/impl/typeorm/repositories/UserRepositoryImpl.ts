import { User } from "../entities/user.entity"

import {
    UserDTO,
    CreateUserDTO,
    UpdateUserDTO
} from "@/modules/auth/user/dtos/UserDTO"

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class UserRepositoryImpl
    extends BaseRepositoryImpl<UserDTO, CreateUserDTO, UpdateUserDTO> {
    
    constructor() {
        super('id', User)
    }

}
