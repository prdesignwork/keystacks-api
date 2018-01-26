const db = require('./connection')

function getStacks(user_id) {
  return db('stack').select().where('user_id', user_id);
}

function getKeys(stack_id) {
  return db('key').select().where('stack_id', stack_id);
}


module.exports = {
  getStacks,
  getKeys
}
