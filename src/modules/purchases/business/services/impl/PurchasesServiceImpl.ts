import { injectable, inject } from 'tsyringe'

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl'

import { 
  PurchasesDTO,
  CreatePurchasesDTO,
  UpdatePurchasesDTO
} from "../../../dtos/PurchasesDTO"

import { PurchasesRepository } from '../../../database/repositories/PurchasesRepository'

@injectable()
export class PurchasesServiceImpl
    extends BaseServiceImpl<PurchasesDTO, CreatePurchasesDTO, UpdatePurchasesDTO>{

    constructor(
        @inject('PurchasesRepository')
        purchasesRepository: PurchasesRepository
    ) {
        super(purchasesRepository)
    }
    
}
