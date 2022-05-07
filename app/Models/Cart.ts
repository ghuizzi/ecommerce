import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, computed, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
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

  // @column()
  // public total: number

  @computed()
  public get total() {
    const total  = new Product
    const units  = new Cart
    total.price   = [price]
    units.units  = [units]
    const tota  = total.price * units.units
    console.log(tota)
    return (tota)
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
