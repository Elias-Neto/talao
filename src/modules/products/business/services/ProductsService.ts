import { BaseService } from '@/modules/base/BaseService'

import { 
    ProductsDTO,
    CreateProductsDTO,
    UpdateProductsDTO
} from "../../dtos/ProductsDTO"

export interface ProductsService 
    extends BaseService<ProductsDTO, CreateProductsDTO, UpdateProductsDTO> {}
