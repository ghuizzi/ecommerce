import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany,  } from '@ioc:Adonis/Lucid/Orm'
import Products from 'Database/migrations/1651173581627_create_product_tables'
import Product from './Product'


export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name:string
  @column()
  public status: true

  @manyToMany(() => Product, {
    pivotTable: 'product_cate',
  })
  public products: ManyToMany<typeof Product>
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
