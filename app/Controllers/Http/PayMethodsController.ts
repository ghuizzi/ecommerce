import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PayMethod from 'App/Models/PayMethod'

export default class PayMethodsController {
    public async index({response}:HttpContextContract){
        const payM = await PayMethod.query().select('*').from('pay_methods')
        return response.status(200).json(payM)
    }

    public async store({request, response}:HttpContextContract){
        const {name} = request.body()
        const payM = PayMethod.create({name})
        return response.json(payM)
    }
 
}
