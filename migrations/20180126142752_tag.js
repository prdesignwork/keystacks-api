exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('tag',function (table){
      table.increments('id')
      table.integer('user_id').references('user.id');
      table.integer('key_id').references('key.id');
      table.text('name_tag')
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('tag')
  ])
}
