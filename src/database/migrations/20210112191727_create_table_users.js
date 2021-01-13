
exports.up = knex => knex.schema.createTable('user', table => {
    table.increments('id')
    table.text('username').unique().notNullable()

    table.timestamp('created_at').defaultTo(Knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
}) 

exports.down = knex => knex.schema.dropTable('users')
  
