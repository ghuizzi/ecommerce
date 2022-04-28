import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Category extends BaseSchema {
  protected tableName = 'category'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').unique().notNullable()
      table.boolean('status').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
