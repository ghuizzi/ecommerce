import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PayOrder extends BaseSchema {
  protected tableName = 'pay_order'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_users').unsigned().references('id').inTable('users')
      table.integer('id_cart').unsigned().references('id').inTable('cart')
      table.integer('id_pay_methods').unsigned().references('id').inTable('pay_methods')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
