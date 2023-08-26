import { injectable, inject } from 'tsyringe'
import { Request, Response } from 'express'

import { AuthController } from '../AuthController'
import { AuthService } from '../../../business/services/AuthService'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'

@injectable()
export class AuthControllerImpl implements AuthController {
    
    constructor(
        @inject('AuthService')
        private authService: AuthService
    ) {}

    public async signin(req: Request, res: Response): Promise<Response> {
        const auth = req.body
        const signin = await this.authService.signin(auth)
        return res.json(signin)
    }

    public async signup(req: Request, res: Response): Promise<Response> {
        const auth = req.body
        const signup = await this.authService.signup(auth)
        return res.json(signup)
    }

}
