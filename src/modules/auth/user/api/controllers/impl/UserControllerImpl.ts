import { injectable, inject } from 'tsyringe'

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl'

import { 
    CreateUserDTO, 
    UpdateUserDTO, 
    ResponseUserDTO 
} from '../../../dtos/UserDTO'

import { UserService } from '../../../business/services/UserService'

@injectable()
export class UserControllerImpl 
    extends BaseControllerImpl<ResponseUserDTO, CreateUserDTO, UpdateUserDTO> {
    
    constructor(
        @inject('UserService')
        crud1Service: UserService
    ) {
        super(crud1Service)
    }

}
