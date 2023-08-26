import {
    Crud2DTO,
    CreateCrud2DTO,
    UpdateCrud2DTO
} from '../../dtos/Crud2DTO'

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface Crud2Repository
    extends BaseRepository<Crud2DTO, CreateCrud2DTO, UpdateCrud2DTO> { }
