import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import PayOrder from './PayOrder'

export default class PayMethod extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name : string

  @hasMany(() => PayOrder,{
    foreignKey: 'creatBy'
    
  }) public pay_order: HasMany<typeof PayOrder>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
