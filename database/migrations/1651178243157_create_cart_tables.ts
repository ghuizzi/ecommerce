import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cart extends BaseSchema {
  protected tableName = 'cart'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_products').unsigned().references('id').inTable('products')
      table.integer('id_users').unsigned().references('id').inTable('users')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
