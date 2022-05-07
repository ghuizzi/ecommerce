import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Cart extends BaseSchema {
  protected tableName = 'carts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_product').unsigned().references('id').inTable('products')
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.integer('units').notNullable()
      
      table.timestamps(true, true)
    })
  }
 
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
