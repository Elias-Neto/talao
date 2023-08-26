import { injectable, inject } from "tsyringe"

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl"

import {
    Crud2DTO,
    CreateCrud2DTO,
    UpdateCrud2DTO
} from "../../../dtos/Crud2DTO"

import { Crud2Repository } from "../../../database/repositories/Crud2Repository"

@injectable()
export class Crud2ServiceImpl
    extends BaseServiceImpl<Crud2DTO, CreateCrud2DTO, UpdateCrud2DTO> {

    constructor(
        @inject('Crud2Repository')
        crud2Repository: Crud2Repository
    ) {
        super(crud2Repository)
    }
    
}
