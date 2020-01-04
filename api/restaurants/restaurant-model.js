const db = require('../../database/db-config');

module.exports = {
  getAll,
  add,
  update,
  remove,
};

function getAll() {
  return db('restaurants');
}

async function add(postData) {
  const [id] = await db('restaurants').insert(postData);
  return id;
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
