import { injectable, inject } from 'tsyringe'

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl'

import {
    Crud1DTO,
    CreateCrud1DTO,
    UpdateCrud1DTO
} from '../../../dtos/Crud1DTO'

import { Crud1Repository } from '../../../database/repositories/Crud1Repository'

@injectable()
export class Crud1ServiceImpl
    extends BaseServiceImpl<Crud1DTO, CreateCrud1DTO, UpdateCrud1DTO> {

    constructor(
        @inject('Crud1Repository')
        crud1Repository: Crud1Repository
    ) {
        super(crud1Repository)
    }
    
}
