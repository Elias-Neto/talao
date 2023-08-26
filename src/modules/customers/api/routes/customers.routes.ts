import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const customersRouter = Router()

const customersController = container.resolve('CustomersController')

customersRouter.use('/', baseRoutes(customersController))

export default customersRouter
