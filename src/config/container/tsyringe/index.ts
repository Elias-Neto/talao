import { container } from "tsyringe"

import { AuthControllerImpl } from "@/modules/auth/auth/api/controllers/impl/AuthControllerImpl"
import { UserControllerImpl } from "@/modules/auth/user/api/controllers/impl/UserControllerImpl"
import { OrdersControllerImpl } from '@/modules/orders/api/controllers/impl/OrdersControllerImpl'
import { CustomersController } from '@/modules/customers/api/controllers/impl/CustomersControllerImpl'
import { AddressesControllerImpl } from '@/modules/addresses/api/controllers/impl/AddressesControllerImpl'
import { ProductsControllerImpl } from '@/modules/products/api/controllers/impl/ProductsControllerImpl'
import { PurchasesControllerImpl } from '@/modules/purchases/api/controllers/impl/PurchasesControllerImpl'

import { AuthServiceImpl } from "@/modules/auth/auth/business/services/impl/AuthServiceImpl"
import { UserServiceImpl } from "@/modules/auth/user/business/services/impl/UserServiceImpl"
import { OrdersServiceImpl } from '@/modules/orders/business/services/impl/OrdersServiceImpl'
import { CustomersServiceImpl } from '@/modules/customers/business/services/impl/CustomersServiceImpl'
import { AddressesServiceImpl } from '@/modules/addresses/business/services/impl/AddressesServiceImpl'
import { ProductsServiceImpl } from '@/modules/products/business/services/impl/ProductsServiceImpl'
import { PurchasesServiceImpl } from '@/modules/purchases/business/services/impl/PurchasesServiceImpl'

import { UserRepositoryImpl } from "@/modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl"
import { OrdersRepositoryImpl } from '@/modules/orders/database/repositories/impl/typeorm/repositories/OrdersRepositoryImpl'
import { ProductsRepositoryImpl } from '@/modules/products/database/repositories/impl/typeorm/repositories/ProductsRepositoryImpl'
import { CustomersRepositoryImpl } from '@/modules/customers/database/repositories/impl/typeorm/repositories/CustomersRepositoryImpl'
import { AddressesRepositoryImpl } from '@/modules/addresses/database/repositories/impl/typeorm/repositories/AddressesRepositoryImpl'
import { PurchasesRepositoryImpl } from '@/modules/purchases/database/repositories/impl/typeorm/repositories/PurchasesRepositoryImpl'

container.register("AuthController", {useClass: AuthControllerImpl})
container.register("UserController", {useClass: UserControllerImpl})
container.register("OrdersController", {useClass: OrdersControllerImpl})
container.register("CustomersController", {useClass: CustomersController})
container.register("ProductsController", {useClass: ProductsControllerImpl})
container.register("AddressesController", {useClass: AddressesControllerImpl})
container.register("PurchasesController", {useClass: PurchasesControllerImpl})

container.register("AuthService", {useClass: AuthServiceImpl})
container.register("UserService", {useClass: UserServiceImpl})
container.register("OrdersService", {useClass: OrdersServiceImpl})
container.register("ProductsService", {useClass: ProductsServiceImpl})
container.register("CustomersService", {useClass: CustomersServiceImpl})
container.register("AddressesService", {useClass: AddressesServiceImpl})
container.register("PurchasesService", {useClass: PurchasesServiceImpl})

container.register("UserRepository", {useClass: UserRepositoryImpl})
container.register("OrdersRepository", {useClass: OrdersRepositoryImpl})
container.register("ProductsRepository", {useClass: ProductsRepositoryImpl})
container.register("CustomersRepository", {useClass: CustomersRepositoryImpl})
container.register("AddressesRepository", {useClass: AddressesRepositoryImpl})
container.register("PurchasesRepository", {useClass: PurchasesRepositoryImpl})
