import { injectable, inject } from 'tsyringe'

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl'

import { 
    ProductsDTO,
    CreateProductsDTO,
    UpdateProductsDTO
} from "../../../dtos/ProductsDTO"

import { ProductsRepository } from '../../../database/repositories/ProductsRepository'

@injectable()
export class ProductsServiceImpl
    extends BaseServiceImpl<ProductsDTO, CreateProductsDTO, UpdateProductsDTO> {

    constructor(
        @inject('ProductsRepository')
        productsRepository: ProductsRepository
    ) {
        super(productsRepository)
    }
    
}
