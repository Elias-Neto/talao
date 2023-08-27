import { injectable, inject } from 'tsyringe'

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl'

import { 
    OrdersDTO,
    CreateOrdersDTO,
    UpdateOrdersDTO
} from "../../../dtos/OrdersDTO"

import { OrdersRepository } from '../../../database/repositories/OrdersRepository'

@injectable()
export class OrdersServiceImpl
    extends BaseServiceImpl<OrdersDTO, CreateOrdersDTO, UpdateOrdersDTO>{

    constructor(
        @inject('OrdersRepository')
        ordersRepository: OrdersRepository
    ) {
        super(ordersRepository)
    }
    
}
