import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Marc from './Marc'
import Category from './Category'
import Cart from './Cart'

export default class Product extends BaseModel {
  public static table = 'products'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public stock: number

  @column()
  public status: true
   
  @column()
  public marcs_id: number

 @belongsTo(()=> Marc,{
   localKey: 'creatBy'
 })public marc: BelongsTo<typeof Marc>

//  @belongsTo(()=> Category,{
//    localKey: 'creatBy'
//  })
//  public category: BelongsTo<typeof Category>

 @manyToMany(() => Category,{
   pivotTable: 'products_cate'
 })
 public category : ManyToMany<typeof Category>

 @manyToMany(() => Cart,{
  pivotTable: 'prod_carts'
})
public cart :ManyToMany<typeof Cart>
 
 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
