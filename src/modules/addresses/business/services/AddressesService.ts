import { BaseService } from '@/modules/base/BaseService'

import {
  AddressesDTO,
  CreateAddressesDTO,
  UpdateAddressesDTO
} from '../../dtos/AddressesDTO'

export interface AddressesService 
    extends BaseService<AddressesDTO, CreateAddressesDTO, UpdateAddressesDTO> {}