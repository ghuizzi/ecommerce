import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProdCart extends BaseSchema {
  protected tableName = 'prod_carts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('product_id').unsigned().references('products.id')
      table.integer('cart_id').unsigned().references('carts.id')
      table.integer('units').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
