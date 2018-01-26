exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('heart',function (table){
      table.increments('id')
      table.integer('user_id').references('user.id');
      table.integer('stack_id').references('stack.id');
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('heart')
  ])
}
