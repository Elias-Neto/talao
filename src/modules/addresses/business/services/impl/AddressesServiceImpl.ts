import { injectable, inject } from 'tsyringe'

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl'

import {
  AddressesDTO,
  CreateAddressesDTO,
  UpdateAddressesDTO
} from '../../../dtos/AddressesDTO'

import { AddressesRepository } from '../../../database/repositories/AddressesRepository'

@injectable()
export class AddressesServiceImpl
    extends BaseServiceImpl<AddressesDTO, CreateAddressesDTO, UpdateAddressesDTO> {

    constructor(
        @inject('AddressesRepository')
        addressesRepository: AddressesRepository
    ) {
        super(addressesRepository)
    }
}