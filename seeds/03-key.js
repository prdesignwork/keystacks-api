
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('key').del()
    .then(function () {
      // Inserts seed entries
      return knex('key').insert([
        {
          // id:"" ,
          stack_id:1,
          name_key: 'Intro',
          details: "Hi, my name is Paul Rodriguez and I am a Creative Full Stack Developer here in Denver, CO."
        },
        {
          // id:"" ,
          stack_id:1,
          name_key: 'TI-85',
          details: "The reason I got into coding was because of my TI-85 calculator back in High School. Raise your hand if you remember those? My first major project was creating a tic-tac-toe game on my TI-85 using BASIC if, then, else, conditions, and variables."
        },
        {
          // id:"" ,
          stack_id:1,
          name_key: 'U of I',
          details: "Afterwards, I went to U of I in Champaign, IL for Graphic Design and really mastered keyboard shortcuts working as a Junior Illustrator at a book publishing company."
        },
        {
          // id:"" ,
          stack_id:2,
          name_key: 'The Home Depot',
          details: "And continued, as a Junior Designer for The Home Depot designing weekly Point of Purchase signage throught the US, Mexico, and Puerto Rico with a focus on Spanish and Bilingual signage."
        },
        {
          // id:"" ,
          stack_id:2,
          name_key: 'AD / Lead Web Dev',
          details: "Eventually, I worked my way up to Art Director, and then Lead Web Developer with only a solid grasp of HTML, CSS, and Wordpress websites."
        },
        {
          // id:"" ,
          stack_id:2,
          name_key: 'Self-taught',
          details: "I self-taught myself a lot with online tutorials such as Lynda.com, TeamTreehouse, and SmashingMagazine.com."
        },
      ]);
    });
};
