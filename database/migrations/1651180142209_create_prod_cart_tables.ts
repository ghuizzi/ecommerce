import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProdCart extends BaseSchema {
  protected tableName = 'prod_cart'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_products').unsigned().references('id').inTable('products')
      table.integer('id_cart').unsigned().references('id').inTable('cart')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
