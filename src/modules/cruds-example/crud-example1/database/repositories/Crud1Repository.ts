import { 
    Crud1DTO, 
    CreateCrud1DTO, 
    UpdateCrud1DTO 
} from "../../dtos/Crud1DTO"

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface Crud1Repository 
    extends BaseRepository<Crud1DTO, CreateCrud1DTO, UpdateCrud1DTO> { }
