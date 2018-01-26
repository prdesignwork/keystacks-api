
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          // id:"" ,
          name_user:'Paul Rodriguez',
          username: 'prdesignwork',
          email: 'paul@prdesign.work',
          password: 'abc123'
        },
      ]);
    });
};
