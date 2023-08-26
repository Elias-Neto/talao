export class AddressesDTO {
  id: number
  city: string
  state: string
}

export type CreateAddressesDTO = Omit<AddressesDTO, 'id'>
export type UpdateAddressesDTO = Partial<AddressesDTO>