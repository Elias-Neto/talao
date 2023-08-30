export class PurchasesDTO {
  id: number
  client_id: number
  total: number
  amount_paid: number
  created_at: Date
  updated_at: Date
}

export type CreatePurchasesDTO = Omit<PurchasesDTO, 'id'>
export type UpdatePurchasesDTO = Partial<PurchasesDTO>