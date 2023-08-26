export class CustomersDTO {
  id: number
  name: string
  phone: string
}

export type CreateCustomersDTO = Omit<CustomersDTO, 'id'>
export type UpdateCustomersDTO = Partial<CustomersDTO>