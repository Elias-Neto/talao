import { Addresses } from '../entities/addresses.entity'

import {
  AddressesDTO,
  CreateAddressesDTO,
  UpdateAddressesDTO
} from '@/modules/addresses/dtos/AddressesDTO'

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class AddressesRepositoryImpl
  extends BaseRepositoryImpl<AddressesDTO, CreateAddressesDTO, UpdateAddressesDTO> {

    constructor() {
      super('id', Addresses)
    }
    
  }