import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const ordersRouter = Router()

const ordersController = container.resolve('OrdersController')

ordersRouter.use('/', baseRoutes(ordersController))

export default ordersRouter
