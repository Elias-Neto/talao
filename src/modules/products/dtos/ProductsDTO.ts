export class ProductsDTO {
  id: number
  name: string
  code: string
  price: number
}

export type CreateProductsDTO = Omit<ProductsDTO, 'id'>
export type UpdateProductsDTO = Partial<ProductsDTO>