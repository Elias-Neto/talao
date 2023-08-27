import { container } from "tsyringe"

import { AuthControllerImpl } from "@/modules/auth/auth/api/controllers/impl/AuthControllerImpl"
import { UserControllerImpl } from "@/modules/auth/user/api/controllers/impl/UserControllerImpl"
import { CustomersController } from '@/modules/customers/api/controllers/impl/CustomersControllerImpl'
import { AddressesControllerImpl } from '@/modules/addresses/api/controllers/impl/AddressesControllerImpl'
import { ProductsControllerImpl } from '@/modules/products/api/controllers/impl/ProductsControllerImpl'
import { OrdersControllerImpl } from '@/modules/orders/api/controllers/impl/OrdersControllerImpl'

import { AuthServiceImpl } from "@/modules/auth/auth/business/services/impl/AuthServiceImpl"
import { UserServiceImpl } from "@/modules/auth/user/business/services/impl/UserServiceImpl"
import { CustomersServiceImpl } from '@/modules/customers/business/services/impl/CustomersServiceImpl'
import { AddressesServiceImpl } from '@/modules/addresses/business/services/impl/AddressesServiceImpl'
import { ProductsServiceImpl } from '@/modules/products/business/services/impl/ProductsServiceImpl'
import { OrdersServiceImpl } from '@/modules/orders/business/services/impl/OrdersServiceImpl'

import { UserRepositoryImpl } from "@/modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl"
import { CustomersRepositoryImpl } from '@/modules/customers/database/repositories/impl/typeorm/repositories/CustomersRepositoryImpl'
import { AddressesRepositoryImpl } from '@/modules/addresses/database/repositories/impl/typeorm/repositories/AddressesRepositoryImpl'
import { ProductsRepositoryImpl } from '@/modules/products/database/repositories/impl/typeorm/repositories/ProductsRepositoryImpl'
import { OrdersRepositoryImpl } from '@/modules/orders/database/repositories/impl/typeorm/repositories/OrdersRepositoryImpl'

container.register("AuthController", {useClass: AuthControllerImpl})
container.register("UserController", {useClass: UserControllerImpl})
container.register("CustomersController", {useClass: CustomersController})
container.register("AddressesController", {useClass: AddressesControllerImpl})
container.register("ProductsController", {useClass: ProductsControllerImpl})
container.register("OrdersController", {useClass: OrdersControllerImpl})

container.register("AuthService", {useClass: AuthServiceImpl})
container.register("UserService", {useClass: UserServiceImpl})
container.register("CustomersService", {useClass: CustomersServiceImpl})
container.register("AddressesService", {useClass: AddressesServiceImpl})
container.register("ProductsService", {useClass: ProductsServiceImpl})
container.register("OrdersService", {useClass: OrdersServiceImpl})

container.register("UserRepository", {useClass: UserRepositoryImpl})
container.register("CustomersRepository", {useClass: CustomersRepositoryImpl})
container.register("AddressesRepository", {useClass: AddressesRepositoryImpl})
container.register("ProductsRepository", {useClass: ProductsRepositoryImpl})
container.register("OrdersRepository", {useClass: OrdersRepositoryImpl})
