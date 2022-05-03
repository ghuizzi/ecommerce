import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PayMethods extends BaseSchema {
  protected tableName = 'pay_methods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').unique().notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
