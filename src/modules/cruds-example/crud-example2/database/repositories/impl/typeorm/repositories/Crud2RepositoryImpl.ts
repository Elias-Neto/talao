import { Crud2 } from "../entities/crud2.entity"

import {
    Crud2DTO,
    CreateCrud2DTO,
    UpdateCrud2DTO
} from "@/modules/cruds-example/crud-example2/dtos/Crud2DTO"

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class Crud2RepositoryImpl
    extends BaseRepositoryImpl<Crud2DTO, CreateCrud2DTO, UpdateCrud2DTO> {
    
    constructor() {
        super('id', Crud2)
    }

}
