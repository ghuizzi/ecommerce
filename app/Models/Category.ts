import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany,  } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'


export default class Category extends BaseModel {
  
    public static table = 'categories'
  @column({ isPrimary: true })
  public id: number
  @column()
  public name:string
  @column()
  public status: true

  @manyToMany(() => Product, {
    pivotTable: 'products_cate',
  })
  public products: ManyToMany<typeof Product>
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
