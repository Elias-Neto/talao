import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const crud1Router = Router()

const crud1Controller = container.resolve('Crud1Controller')

crud1Router.use('/', baseRoutes(crud1Controller))

export default crud1Router
