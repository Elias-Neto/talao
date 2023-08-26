import { injectable, inject } from 'tsyringe'

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl'

import {
  AddressesDTO,
  CreateAddressesDTO,
  UpdateAddressesDTO
} from '../../../dtos/AddressesDTO'

import { AddressesService } from '../../../business/services/AddressesService'

@injectable()
export class AddressesControllerImpl 
    extends BaseControllerImpl<AddressesDTO, CreateAddressesDTO, UpdateAddressesDTO> {
    
    constructor(
        @inject('AddressesService')
        addressesService: AddressesService
    ) {
        super(addressesService)
    }

}
