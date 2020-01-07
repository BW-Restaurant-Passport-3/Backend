const db = require('../../database/db-config');

module.exports = {
  getPassport,
  add,
  getAll,
  findBy,
  getById,
  remove,
};

async function add(userData) {
  const [id] = await db('users').insert(userData, 'id');
  return id;
}

function getAll() {
  return db('users');
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

function getById(id) {
  return db('users')
    .where({ id })
    .first();
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

function getPassport(id) {
  return db('restaurants').where({ user_id: id });
}
