import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cart from './Cart'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullname : string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public details_user: string

  @hasMany(()=> Cart,{
    foreignKey: 'creatBy'
  })
  public cart : HasMany<typeof Cart>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
