import { Router } from 'express'

import authRouter from '@/modules/auth/auth/api/routes/auth.routes'

import { ensureIsAuthenticated } from '../middlewares/AuthMiddleware'

import userRouter from '@/modules/auth/user/api/routes/user.routes'
import crud1Router from '@/modules/cruds-example/crud-example1/api/routes/crud1.routes'
import crud2Router from '@/modules/cruds-example/crud-example2/api/routes/crud2.routes'
import customersRouter from '@/modules/customers/api/routes/customers.routes'
import addressesRouter from '@/modules/addresses/api/routes/addresses.routes'
import productsRouter from '@/modules/products/api/routes/products.routes'

const router = Router()

router.use('/auth', authRouter)

router.use(ensureIsAuthenticated)
router.use('/auth/users', userRouter)
router.use('/crud-example1', crud1Router)
router.use('/crud-example2', crud2Router)
router.use('/customers', customersRouter)
router.use('/addresses', addressesRouter)
router.use('/products', productsRouter)

export default router
