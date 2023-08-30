import { UpdateOrdersDTO } from "@/modules/orders/dtos/OrdersDTO"
import { 
    PurchasesDTO,
    CreatePurchasesDTO,
    UpdatePurchasesDTO
} from "../../dtos/PurchasesDTO"

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface PurchasesRepository 
    extends BaseRepository<PurchasesDTO, CreatePurchasesDTO, UpdatePurchasesDTO> {}
