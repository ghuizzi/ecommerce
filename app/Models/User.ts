
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Cart from './Cart'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name : string

  @column()
  public lastname: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public rememberMeToken : string

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

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  
}
