import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Marcs extends BaseSchema {
  protected tableName = 'marcs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').unique().notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}