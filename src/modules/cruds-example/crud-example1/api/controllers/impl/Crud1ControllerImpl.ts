import { injectable, inject } from 'tsyringe'

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl'

import { 
    CreateCrud1DTO, 
    UpdateCrud1DTO, 
    Crud1DTO 
} from '../../../dtos/Crud1DTO'

import { Crud1Service } from '../../../business/services/Crud1Service'

@injectable()
export class Crud1ControllerImpl 
    extends BaseControllerImpl<Crud1DTO, CreateCrud1DTO, UpdateCrud1DTO> {
    
    constructor(
        @inject('Crud1Service')
        crud1Service: Crud1Service
    ) {
        super(crud1Service)
    }

}
