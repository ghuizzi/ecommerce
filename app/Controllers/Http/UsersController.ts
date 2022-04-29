// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index(){
        const users = [
            {
                fullname: 'Gabriela Sarai',
                email : 'gaby@gmail.com',
                password: 'gaby111',
                details_user: 'vive en Gunarare'
            }
        ]
        return {users}
    }
    
}
