import { DeepPartial } from 'typeorm'

import { Purchases } from '../entities/purchases.entity'

import {
  PurchasesDTO,
  CreatePurchasesDTO,
  UpdatePurchasesDTO
} from '@/modules/purchases/dtos/PurchasesDTO'

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class PurchasesRepositoryImpl
  extends BaseRepositoryImpl<PurchasesDTO, CreatePurchasesDTO, UpdatePurchasesDTO> {

    constructor() {
      super('id', Purchases)
    }

  }