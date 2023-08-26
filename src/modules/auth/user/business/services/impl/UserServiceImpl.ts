import { injectable, inject } from 'tsyringe'

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl'

import {
    UserDTO,
    CreateUserDTO,
    UpdateUserDTO
} from '../../../dtos/UserDTO'

import { UserRepository } from '../../../database/repositories/UserRepository'

@injectable()
export class UserServiceImpl
    extends BaseServiceImpl<UserDTO, CreateUserDTO, UpdateUserDTO> {

    constructor(
        @inject('UserRepository')
        userRepository: UserRepository
    ) {
        super(userRepository)
    }
    
}
