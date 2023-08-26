import { UserDTO } from "../../user/dtos/UserDTO"

export class AuthDTO extends UserDTO {}

export class TokenDTO {
    token: string
}
