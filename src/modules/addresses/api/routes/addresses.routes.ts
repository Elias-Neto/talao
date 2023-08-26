import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const addressesRouter = Router()

const addressesController = container.resolve('AddressesController')

addressesRouter.use('/', baseRoutes(addressesController))

export default addressesRouter
