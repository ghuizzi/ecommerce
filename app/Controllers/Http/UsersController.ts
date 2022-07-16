import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Schema from '@ioc:Adonis/Lucid/Schema'
import User from 'App/Models/User'

export default class UsersController {
    public async index(){
       
    }
    public async store({response,request}:HttpContextContract){
        const { name, lastname, email, password, details_user  } = request.body()
        
       
        try {
          const user = await User.create({
              name: name, 
              lastname: lastname,
              email: email,
              password: password,
              details_user: details_user  

            })
            return response.json(user)
        } catch (error) {
          
          return response.json(error)
      }
      
    }
    // public async login({request, response}:HttpContextContract){
    //     const newUserSchema.create({
    //         email : Schema.string({ trim: true}),
    //     });
    //     const payload = await request.validate({schema: newUserSchema});
    //     const user = await User.create(payload);
    //     response.status(201)
    //     return user
    // }
    public async update({params, request, response}:HttpContextContract){

        const users = await  User.find(params.id)
        const  data =  request.only(['name', 'lastname', 'details_user'])
        
        if(users){
          users.merge(data)
          users.save()
          return response.status(200).json(users)
        }else{
          return{message : `el curso id=${params.id} no existe`}
        
    }
    
    }
    public async forgotpassword({params,request,response}:HttpContextContract){
        const pass = await User.find(params.id)
        const data = request.only(['email','password'])
        if(pass){
            pass.merge(data)
            pass.save()
            return response.status(200).json(pass)
        }else{
            return{message: `el curso id=${params.id} no existe`}
        }
    }
    public async destroy({response, params}:HttpContextContract){
        const users = await Database.from('users').where('id', params.id).delete();
    return response.json({users})
    }
  
}
