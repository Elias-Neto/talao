import { injectable, inject } from 'tsyringe'

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl'

import { 
  PurchasesDTO,
  CreatePurchasesDTO,
  UpdatePurchasesDTO
} from "../../../dtos/PurchasesDTO"

import { PurchasesService } from '../../../business/services/PurchasesService'

@injectable()
export class PurchasesControllerImpl 
    extends BaseControllerImpl<PurchasesDTO, CreatePurchasesDTO, UpdatePurchasesDTO> {
    
    constructor(
        @inject('PurchasesService')
        purchasesService: PurchasesService
    ) {
        super(purchasesService)
    }

}

