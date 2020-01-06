const db = require('../../database/db-config');

module.exports = {
  getRestaurants,
  add,
  findBy,
};

async function add(userData) {
  console.log('here');
  const [id] = await db('users').insert(userData);
  return id;
}

function getRestaurants(id) {
  return db('restaurants').where({ user_id: id });
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}
