import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import Category from "App/Models/Category";
import Product from "App/Models/Product";


export default class TestPivotsController {

  public async test({ response }: HttpContextContract) {

    const categories = await  Category
        .query()
        .preload('products')
        return response.json(categories)

  }
  public async categ({response}:HttpContextContract){
     const products = await Product
     .query()
     .preload('category')
     return response.json(products)
  }
  public async prodCart({response}:HttpContextContract){
    const carts = await Product
     .query()
     .preload('cart')
     return response.json(carts)
  }

  public async cartPro({response}:HttpContextContract){

    const products = await  Product
        .query()
        .preload('cart')
        console.log(products[0].cart)
        return response.json(products)
  }

}
