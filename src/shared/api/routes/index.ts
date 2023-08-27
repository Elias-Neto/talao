import { Router } from 'express'

import authRouter from '@/modules/auth/auth/api/routes/auth.routes'

import { ensureIsAuthenticated } from '../middlewares/AuthMiddleware'

import userRouter from '@/modules/auth/user/api/routes/user.routes'
import customersRouter from '@/modules/customers/api/routes/customers.routes'
import addressesRouter from '@/modules/addresses/api/routes/addresses.routes'
import productsRouter from '@/modules/products/api/routes/products.routes'
import ordersRouter from '@/modules/orders/api/routes/orders.routes'

const router = Router()

router.use('/auth', authRouter)

router.use(ensureIsAuthenticated)
router.use('/auth/users', userRouter)
router.use('/customers', customersRouter)
router.use('/addresses', addressesRouter)
router.use('/products', productsRouter)
router.use('/orders', ordersRouter)

export default router
