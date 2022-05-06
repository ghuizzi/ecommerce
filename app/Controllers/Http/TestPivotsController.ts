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
  //   let products = await Database.from('products').select('*')
    
  //  let  productsData : any[] = []

  //   for (let product of products) {
  //     const categories = await Database.from("products_cate")
  //       .select(
  //         "categories.id as category_id",
  //         "categories.name as category_name"
  //       )

  //       .join("categories", "categories.id", "=", "products_cate.categories_id")
  //       .where("products_cate.products_id", product.id);
        
  //       let productData: any[] = { ...product, categories}
       
  //       productsData.push(productData)
        
  //   }
    
  //   return response.json(productsData);

   
  }
  public async categ({response}:HttpContextContract){
      let categories = await Database.from('categories').select('*')
      let catesData: any[] =[]
      for (let category of categories){
        const products = await Database.from("products_cate")
        .select(
          "products.id as product_id",
          "products.name as product_name"
        )
        .join("products", "products.id", "=", "products_cate.products_id")
        .where("products_cate.categories_id", category.id);
        let cateData: any[] = { ... category, products}
        catesData.push(cateData)
      }
      return response.json(catesData)
  }
  public async prodCart({response}:HttpContextContract){
    let products = await Database.from('products').select('*')
    let  productsData : any[] = []
    for(let product of products){
      const carts = await Database.from('prod_carts').select('*')
      .select(
        "carts.id as cart_id",
        "carts.id_users as cart_id_users"
      )
      .join("carts", "carts.id", "=" ,"prod_carts.cart_id")
      .where("prod_carts.product_id", product.id);
      let productData: any[] = {... product, carts}
      productsData.push(productData)
    }
    return response.json(productsData)
     
    
  }

  public async cartPro({response}:HttpContextContract){

    const products = await  Product
        .query()
        .preload('cart')
        console.log(products[0].cart)
        return response.json(products)
}
  //   let carts  = await Database.from('carts').select('*')
  //   let cartsData : any[]  =[]
  //   for (let cart of carts){
  //     const product  = await Database.from('prod_carts')
  //     .select(
  //       "products.id as product_id",
  //       "products.name as product_name",
  //       "products.price as product_price "
        
  //     )
  //       .join("products", "products.id", "=", "prod_carts.product_id")
  //       .where("prod_carts.cart_id", cart.id);
  //       let cartData: any[] = {... cart, product}
  //       cartsData.push(cartData)
    
  //   }
  //   return response.json(cartsData)
  // }
  
}
