import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductCate extends BaseSchema {
  protected tableName = 'product_cate'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('products_id').unsigned().references('products.id')
      table.integer('category_id').unsigned().references('category.id')
      table.unique(['products_id', 'category_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
