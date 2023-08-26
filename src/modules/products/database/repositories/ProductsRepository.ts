import { 
    ProductsDTO,
    CreateProductsDTO,
    UpdateProductsDTO
} from "../../dtos/ProductsDTO"

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface ProductsRepository 
    extends BaseRepository<ProductsDTO, CreateProductsDTO, UpdateProductsDTO> { }
