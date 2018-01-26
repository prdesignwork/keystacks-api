exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('user',function (table){
      table.increments('id')
      table.text('name_user')
      table.text('username')
      table.text('email')
      table.text('password')
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('user')
  ])
}
