import { BaseService } from '@/modules/base/BaseService'

import { 
  PurchasesDTO,
  CreatePurchasesDTO,
  UpdatePurchasesDTO
} from "../../dtos/PurchasesDTO"

export interface PurchasesService 
    extends BaseService<PurchasesDTO, CreatePurchasesDTO, UpdatePurchasesDTO> {}
