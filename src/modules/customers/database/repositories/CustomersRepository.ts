import {
  CustomersDTO,
  CreateCustomersDTO,
  UpdateCustomersDTO
} from '../../dtos/CustomersDTO'

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface CustomersRepository
  extends BaseRepository<CustomersDTO, CreateCustomersDTO, UpdateCustomersDTO> { }