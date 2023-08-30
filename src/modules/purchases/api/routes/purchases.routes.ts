import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const purchasesRouter = Router()

const purchasesController = container.resolve('PurchasesController')

purchasesRouter.use('/', baseRoutes(purchasesController))

export default purchasesRouter
