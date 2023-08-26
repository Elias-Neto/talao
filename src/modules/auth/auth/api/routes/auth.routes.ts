import { Router } from 'express'
import { container } from 'tsyringe'
import { AuthController } from '../controllers/AuthController'

const authRouter = Router()

const authController = container.resolve('AuthController') as AuthController

authRouter.post('/signin', (req, res) => authController.signin(req, res))
authRouter.post('/signup', (req, res) => authController.signup(req, res))

export default authRouter
