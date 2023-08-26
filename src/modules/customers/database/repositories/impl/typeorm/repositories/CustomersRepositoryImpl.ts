import { Customers } from '../entities/customers.entity'

import {
  CustomersDTO,
  CreateCustomersDTO,
  UpdateCustomersDTO
} from '@/modules/customers/dtos/CustomersDTO'

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class CustomersRepositoryImpl
  extends BaseRepositoryImpl<CustomersDTO, CreateCustomersDTO, UpdateCustomersDTO> {

    constructor() {
      super('id', Customers)
    }
    
  }