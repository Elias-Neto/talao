import {
  AddressesDTO,
  CreateAddressesDTO,
  UpdateAddressesDTO
} from '../../dtos/AddressesDTO'

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface AddressesRepository
  extends BaseRepository<AddressesDTO, CreateAddressesDTO, UpdateAddressesDTO> { }