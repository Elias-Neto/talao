import { Orders } from '../entities/orders.entity'

import {
  OrdersDTO,
  CreateOrdersDTO,
  UpdateOrdersDTO
} from '@/modules/orders/dtos/OrdersDTO'

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class OrdersRepositoryImpl
  extends BaseRepositoryImpl<OrdersDTO, CreateOrdersDTO, UpdateOrdersDTO> {

    constructor() {
      super('id', Orders)
    }
    
  }