import { BaseService } from '@/modules/base/BaseService'

import {
  CustomersDTO,
  CreateCustomersDTO,
  UpdateCustomersDTO
} from '../../dtos/CustomersDTO'

export interface CustomersService 
    extends BaseService<CustomersDTO, CreateCustomersDTO, UpdateCustomersDTO> {}
