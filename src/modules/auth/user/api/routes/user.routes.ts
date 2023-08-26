import { Router } from 'express'
import { container } from 'tsyringe'

import baseRoutes from '@/modules/base/base.routes'

const userRouter = Router()

const userController = container.resolve('UserController')

userRouter.use('/', baseRoutes(userController))

export default userRouter
