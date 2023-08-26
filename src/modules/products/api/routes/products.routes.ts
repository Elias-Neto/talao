import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const productsRouter = Router()

const productsController = container.resolve('ProductsController')

productsRouter.use('/', baseRoutes(productsController))

export default productsRouter
