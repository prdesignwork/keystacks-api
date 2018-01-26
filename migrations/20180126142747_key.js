exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('key',function (table){
      table.increments('id')
      table.integer('stack_id').references('stack.id');
      table.text('name_key')
      table.text('details')
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('key')
  ])
}
