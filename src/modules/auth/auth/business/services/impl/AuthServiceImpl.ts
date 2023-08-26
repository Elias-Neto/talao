import { injectable, inject } from 'tsyringe'

import { AuthDTO, TokenDTO } from '../../../dtos/AuthDTO'

import { AuthService } from '../AuthService'
import { UserService } from '@/modules/auth/user/business/services/UserService'
import PasswordFacade from '../../facades/PasswordFacade'
import JWTFacade from '../../../../../../shared/facades/TokenFacade'
import { TOKEN_EXPIRATION } from '@/config/env'

@injectable()
export class AuthServiceImpl implements AuthService {

    constructor(
        @inject('UserService')
        private userService: UserService
    ) { }

    async signin(auth: AuthDTO): Promise<TokenDTO> {
        const user = await this.userService.getItemByField('email', auth.email) as AuthDTO
        
        if (!user || !PasswordFacade.compare(auth.password, user.password)) {
            throw new Error('Invalid user or password')
        }

        const simpleUser = JSON.parse(JSON.stringify(user))

        return { token: await JWTFacade.sign(simpleUser, { expiresIn: TOKEN_EXPIRATION }) }
    }

    async signup(auth: AuthDTO): Promise<TokenDTO> {
        const checkEmailAlreadyExists = await this.userService.getItemByField('email', auth.email)
        
        if (checkEmailAlreadyExists) {
            throw new Error('Email already exists')
        }

        await this.userService.createItem({ 
            email: auth.email, 
            password: PasswordFacade.hash(auth.password)
        })
        
        return this.signin(auth)
    }

}
