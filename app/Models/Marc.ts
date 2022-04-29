import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Marc extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

@hasMany(()=> Product,{
  foreignKey: 'creatBy'
})
public product: HasMany<typeof Product>



  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
