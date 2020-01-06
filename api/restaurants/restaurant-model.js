const db = require('../../database/db-config');

module.exports = {
  getAll,
  add,
  update,
  remove,
  getById,
};

function getAll() {
  return db('restaurants');
}

async function add(postData) {
  const [id] = await db('restaurants').insert(postData, 'id');
  return getById(id);
}

function getById(id) {
  return db('restaurants')
    .where({ id })
    .first();
}

function update(id, updateData) {
  return db('restaurants')
    .where({ id })
    .update(updateData);
}

function remove(id) {
  return db('restaurants')
    .where({ id })
    .del();
}
