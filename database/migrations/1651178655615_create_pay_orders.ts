import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PayOrder extends BaseSchema {
  protected tableName = 'pay_orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_users').unsigned().references('id').inTable('users')
      table.integer('id_carts').unsigned().references('id').inTable('carts')
      table.integer('id_pay_methods').unsigned().references('id').inTable('pay_methods')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
