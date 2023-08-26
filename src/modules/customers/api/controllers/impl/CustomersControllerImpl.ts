import { injectable, inject } from 'tsyringe'

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl'

import {
  CustomersDTO,
  CreateCustomersDTO,
  UpdateCustomersDTO
} from '../../../dtos/CustomersDTO'

import { CustomersService } from '../../../business/services/CustomersService'

@injectable()
export class CustomersController 
    extends BaseControllerImpl<CustomersDTO, CreateCustomersDTO, UpdateCustomersDTO> {
    
    constructor(
        @inject('CustomersService')
        customersService: CustomersService
    ) {
        super(customersService)
    }

}
