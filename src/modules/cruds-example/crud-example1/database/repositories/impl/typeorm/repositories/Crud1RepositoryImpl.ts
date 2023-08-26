import { Crud1 } from "../entities/crud1.entity"

import { 
    Crud1DTO, 
    CreateCrud1DTO, 
    UpdateCrud1DTO 
} from "@/modules/cruds-example/crud-example1/dtos/Crud1DTO"

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class Crud1RepositoryImpl 
    extends BaseRepositoryImpl<Crud1DTO, CreateCrud1DTO, UpdateCrud1DTO> {
    
    constructor() {
        super('id', Crud1)
    }

}
