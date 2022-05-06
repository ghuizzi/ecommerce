import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Product from './Product'

export default class Cart extends BaseModel {
  public static table = 'carts'
  @column({ isPrimary: true })
  public id: number

  @belongsTo(()=> User,{
    localKey: 'creatBy'
  })
  public user : BelongsTo<typeof User>
  
  @manyToMany(() => Product,{
    pivotTable: 'prod_carts'
  })
  public product : ManyToMany<typeof Product>
  @column()
  public units: number

  @column()
  public total: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
