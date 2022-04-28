import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('fullname').notNullable()
      table.string('email').unique().notNullable()
      table.string('password').unique().notNullable()
      table.string('details_user').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
