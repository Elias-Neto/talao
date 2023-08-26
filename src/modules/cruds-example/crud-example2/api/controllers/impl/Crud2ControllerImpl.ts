import { injectable, inject } from "tsyringe"

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl"

import {
    Crud2DTO,
    CreateCrud2DTO,
    UpdateCrud2DTO
} from "../../../dtos/Crud2DTO"

import { Crud2Service } from "../../../business/services/Crud2Service"

@injectable()
export class Crud2ControllerImpl
    extends BaseControllerImpl<Crud2DTO, CreateCrud2DTO, UpdateCrud2DTO> {
    
    constructor(
        @inject('Crud2Service')
        crud2Service: Crud2Service
    ) {
        super(crud2Service)
    }

}