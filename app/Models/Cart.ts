import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, computed, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Product from './Product'
import Database from '@ioc:Adonis/Lucid/Database'
import Users from 'Database/migrations/1651173198772_create_users_tables'

export default class Cart extends BaseModel {
  public static table = 'carts'
  @column({ isPrimary: true })
  public id: number

@belongsTo(() =>User,{
  foreignKey: 'user_id'
})
 public user: BelongsTo<typeof User>
  
  @manyToMany(() => Product,
  
  {
      
    pivotTable: 'prod_carts'

  })
  
  public product : ManyToMany<typeof Product>

  @column()
  public status : boolean //true : cart active, false : cart payed or cancel  


  // @column()
  // public total: number

  // @computed()
  // public get fullName() {

  //   return `${this.units} ${this.price}`
  // }
  // @computed()
  // public get total() {
  //   const prod:any  = Product.find('price')
  //   const units:any  =  Cart.find('units')
  //   const tota = prod * units
  //   console.log(tota)
    
  //   return (tota)
  // }


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
