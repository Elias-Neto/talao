import { 
    OrdersDTO,
    CreateOrdersDTO,
    UpdateOrdersDTO
} from "../../dtos/OrdersDTO"

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface OrdersRepository 
    extends BaseRepository<OrdersDTO, CreateOrdersDTO, UpdateOrdersDTO> { }
