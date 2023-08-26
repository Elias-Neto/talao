import { BaseService } from "@/modules/base/BaseService"

import {
    Crud2DTO,
    CreateCrud2DTO,
    UpdateCrud2DTO
} from '../../dtos/Crud2DTO'

export interface Crud2Service
    extends BaseService<Crud2DTO, CreateCrud2DTO, UpdateCrud2DTO> { }
    