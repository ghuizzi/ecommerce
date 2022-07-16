import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Cart from 'App/Models/Cart'


export default class CartsController {
 public async cart({response}:HttpContextContract){
   const carts = await Cart.all()
   response.json(carts)
 }
 public async carT({}:HttpContextContract){
   const cart = await Database.rawQuery('select price from products')
   console.log(cart)
   

 }
 public async postcart({response, request}:HttpContextContract){
  const { user_id, status } = request.body()
  const cart= await Cart.create({
      user_id,

      status
      
    })
    console.log(cart)
   
    
  }
  
//   const { status, id_user } = request.body()
       
//   try {
//     const cart = await Cart.create({
//          id_user,
//          status 
        
//       })
//       console.log(cart)
//       return response.json(cart)
//   } catch (error) {
    
//     return response.json(error)
// }

   
    
 }
 public async addprod({response, request}:HttpContextContract){

 }
 public async deletePro({response, params}:HttpContextContract){

 }
}
