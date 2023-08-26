import { Products } from "../entities/products.entity"

import { 
    ProductsDTO,
    CreateProductsDTO,
    UpdateProductsDTO
} from "@/modules/products/dtos/ProductsDTO"

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class ProductsRepositoryImpl 
    extends BaseRepositoryImpl<ProductsDTO, CreateProductsDTO, UpdateProductsDTO> {
    
    constructor() {
        super('id', Products)
    }

}
