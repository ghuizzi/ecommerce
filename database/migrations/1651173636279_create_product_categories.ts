import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductCate extends BaseSchema {
  protected tableName = 'products_cate'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      
      table.integer('product_id').unsigned().references('products.id')
      table.integer('category_id').unsigned().references('categories.id')
      // table.unique(['products_id', 'categories_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
