
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('tag').insert([
        {
          // id:"" ,
          user_id:1,
          key_id: 1,
          name_tag: 'Intro'
        },
        {
          // id:"" ,
          user_id:1,
          key_id: 5,
          name_tag: 'Career'
        },
      ]);
    });
};
