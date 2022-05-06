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
}
