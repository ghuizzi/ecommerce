import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'
 
  public async up () {
    this.schema.createTable(this.tableName,  (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description').nullable()
      table.decimal('price').notNullable()
      table.integer('stock').notNullable().defaultTo(1)
      table.boolean('status').notNullable().defaultTo(true)
      table.integer('marcs_id').unsigned().references('id').inTable('marcs')
     table.timestamps(true, true)
      
    })
    
    // this.schema.alterTable(this.tableName, (table) => {
    //   table.foreign('marcs_id').references('id').inTable('marcs')
    // })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
