import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Cart extends BaseSchema {
  protected tableName = 'carts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.boolean('status').defaultTo(true)
     
      
      table.timestamps(true, true)
    })
  }
 
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
