import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductCate extends BaseSchema {
  protected tableName = 'product_cate'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_products').unsigned().references('id').inTable('products')
      table.integer('id_category').unsigned().references('id').inTable('category')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
