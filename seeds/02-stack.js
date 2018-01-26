
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stack').del()
    .then(function () {
      // Inserts seed entries
      return knex('stack').insert([
        {
          // id:"" ,
          user_id:1,
          name_stack: 'Capstone',
          view_public: false
        },
        {
          // id:"" ,
          user_id:1,
          name_stack: 'Presentation',
          view_public: false
        },      ]);
    });
};
