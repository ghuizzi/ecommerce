import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description').nullable()
      table.decimal('price').notNullable()
      table.integer('stock').notNullable()
      table.boolean('status').notNullable()
      table.integer('marc_id').unsigned().notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
