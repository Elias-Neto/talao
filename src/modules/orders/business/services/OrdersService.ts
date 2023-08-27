import { BaseService } from '@/modules/base/BaseService'

import { 
    OrdersDTO,
    CreateOrdersDTO,
    UpdateOrdersDTO
} from "../../dtos/OrdersDTO"

export interface OrdersService 
    extends BaseService<OrdersDTO, CreateOrdersDTO, UpdateOrdersDTO> {}
