import { injectable, inject } from 'tsyringe'

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl'

import { 
    OrdersDTO,
    CreateOrdersDTO,
    UpdateOrdersDTO
} from "../../../dtos/OrdersDTO"

import { OrdersService } from '../../../business/services/OrdersService'

@injectable()
export class OrdersControllerImpl 
    extends BaseControllerImpl<OrdersDTO, CreateOrdersDTO, UpdateOrdersDTO> {
    
    constructor(
        @inject('OrdersService')
        ordersService: OrdersService
    ) {
        super(ordersService)
    }

}

