exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('stack',function (table){
      table.increments('id')
      table.integer('user_id').references('user.id');
      table.text('name_stack')
      table.boolean('view_public')
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('stack')
  ])
}
