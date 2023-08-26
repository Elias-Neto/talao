import { injectable, inject } from 'tsyringe'

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl'

import {
  CustomersDTO,
  CreateCustomersDTO,
  UpdateCustomersDTO
} from '../../../dtos/CustomersDTO'

import { CustomersRepository } from '../../../database/repositories/CustomersRepository'

@injectable()
export class CustomersServiceImpl
    extends BaseServiceImpl<CustomersDTO, CreateCustomersDTO, UpdateCustomersDTO> {

    constructor(
        @inject('CustomersRepository')
        customersRepository: CustomersRepository
    ) {
        super(customersRepository)
    }
    
}
