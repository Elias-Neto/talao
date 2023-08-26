import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const crud2Router = Router()

const crud2Controller = container.resolve('Crud2Controller')

crud2Router.use('/', baseRoutes(crud2Controller))

export default crud2Router
