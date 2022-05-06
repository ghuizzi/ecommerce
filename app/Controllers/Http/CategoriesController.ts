import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Category from 'App/Models/Category'

export default class CategoriesController {
    public async index({response}:HttpContextContract){
        const category = await Category.query().select('*').from('category')
        return response.status(200).json(category)
    }


    public async store({request, response}:HttpContextContract){
        
        const { name, status } = request.body()
        const category = await Category.create({
            name: name, 
            status: status
            
          })
          return response.json(category)
    
    }
    public async show({ response, params}:HttpContextContract){
        const category = await Database.from('category').where('id', params.id).firstOrFail()
        return response.json({category})
    }
    public async destroy({params, response}:HttpContextContract){
        const category = await Database.from('category').where('id', params.id).delete()
        return response.json({category})
    }
    

}
