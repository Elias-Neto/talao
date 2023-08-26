import { BaseService } from '@/modules/base/BaseService'

import { 
    Crud1DTO,  
    CreateCrud1DTO, 
    UpdateCrud1DTO 
} from '../../dtos/Crud1DTO'

export interface Crud1Service 
    extends BaseService<Crud1DTO, CreateCrud1DTO, UpdateCrud1DTO> {}
