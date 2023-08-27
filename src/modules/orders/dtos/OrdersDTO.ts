export class OrdersDTO {
  id: number
  quantity: number
  total: number
}

export type CreateOrdersDTO = Omit<OrdersDTO, 'id'>
export type UpdateOrdersDTO = Partial<OrdersDTO>