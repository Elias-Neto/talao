import { AuthDTO, TokenDTO } from '../../dtos/AuthDTO'

export interface AuthService {
    signin(auth: AuthDTO): Promise<TokenDTO>
    signup(auth: AuthDTO): Promise<TokenDTO>
}
