import { container } from "tsyringe"

import { AuthControllerImpl } from "@/modules/auth/auth/api/controllers/impl/AuthControllerImpl"
import { UserControllerImpl } from "@/modules/auth/user/api/controllers/impl/UserControllerImpl"
import { Crud1ControllerImpl } from "@/modules/cruds-example/crud-example1/api/controllers/impl/Crud1ControllerImpl"
import { Crud2ControllerImpl } from "@/modules/cruds-example/crud-example2/api/controllers/impl/Crud2ControllerImpl"
import { CustomersController } from '@/modules/customers/api/controllers/impl/CustomersControllerImpl'
import { AddressesControllerImpl } from '@/modules/addresses/api/controllers/impl/AddressesControllerImpl'

import { AuthServiceImpl } from "@/modules/auth/auth/business/services/impl/AuthServiceImpl"
import { UserServiceImpl } from "@/modules/auth/user/business/services/impl/UserServiceImpl"
import { Crud1ServiceImpl } from "@/modules/cruds-example/crud-example1/business/services/impl/Crud1ServiceImpl"
import { Crud2ServiceImpl } from "@/modules/cruds-example/crud-example2/business/services/impl/Crud2ServiceImpl"
import { CustomersServiceImpl } from '@/modules/customers/business/services/impl/CustomersServiceImpl'
import { AddressesServiceImpl } from '@/modules/addresses/business/services/impl/AddressesServiceImpl'

import { UserRepositoryImpl } from "@/modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl"
import { Crud1RepositoryImpl } from "@/modules/cruds-example/crud-example1/database/repositories/impl/typeorm/repositories/Crud1RepositoryImpl"
import { Crud2RepositoryImpl } from "@/modules/cruds-example/crud-example2/database/repositories/impl/typeorm/repositories/Crud2RepositoryImpl"
import { CustomersRepositoryImpl } from '@/modules/customers/database/repositories/impl/typeorm/repositories/CustomersRepositoryImpl'
import { AddressesRepositoryImpl } from '@/modules/addresses/database/repositories/impl/typeorm/repositories/AddressesRepositoryImpl'

container.register("AuthController", {useClass: AuthControllerImpl})
container.register("UserController", {useClass: UserControllerImpl})
container.register("Crud1Controller", {useClass: Crud1ControllerImpl})
container.register("Crud2Controller", {useClass: Crud2ControllerImpl})
container.register("CustomersController", {useClass: CustomersController})
container.register("AddressesController", {useClass: AddressesControllerImpl})

container.register("AuthService", {useClass: AuthServiceImpl})
container.register("UserService", {useClass: UserServiceImpl})
container.register("Crud1Service", {useClass: Crud1ServiceImpl})
container.register("Crud2Service", {useClass: Crud2ServiceImpl})
container.register("CustomersService", {useClass: CustomersServiceImpl})
container.register("AddressesService", {useClass: AddressesServiceImpl})

container.register("UserRepository", {useClass: UserRepositoryImpl})
container.register("Crud1Repository", {useClass: Crud1RepositoryImpl})
container.register("Crud2Repository", {useClass: Crud2RepositoryImpl})
container.register("CustomersRepository", {useClass: CustomersRepositoryImpl})
container.register("AddressesRepository", {useClass: AddressesRepositoryImpl})
