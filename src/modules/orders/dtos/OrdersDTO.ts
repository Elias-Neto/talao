export class OrdersDTO {
  id: number
  quantity: number
  product_price: number
  total: number
}

export type CreateOrdersDTO = Omit<OrdersDTO, 'id'>
export type UpdateOrdersDTO = Partial<OrdersDTO>