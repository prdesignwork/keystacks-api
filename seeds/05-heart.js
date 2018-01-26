
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heart').del()
    .then(function () {
      // Inserts seed entries
      return knex('heart').insert([
        {
          // id:"" ,
          user_id:1,
          stack_id: 1,
        },
        {
          // id:"" ,
          user_id:1,
          stack_id: 2,
        },
      ]);
    });
};
