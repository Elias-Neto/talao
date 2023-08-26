import { injectable, inject } from 'tsyringe'

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl'

import { 
    ProductsDTO,
    CreateProductsDTO,
    UpdateProductsDTO
} from "../../../dtos/ProductsDTO"

import { ProductsService } from '../../../business/services/ProductsService'

@injectable()
export class ProductsControllerImpl 
    extends BaseControllerImpl<ProductsDTO, CreateProductsDTO, UpdateProductsDTO> {
    
    constructor(
        @inject('ProductsService')
        productsService: ProductsService
    ) {
        super(productsService)
    }

}

