exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl
        .string('username', 255)
        .unique()
        .notNullable();
      tbl.string('password', 255).notNullable();
      tbl.string('name', 255).notNullable();
      tbl.string('city', 255).notNullable();
      tbl
        .string('email', 255)
        .unique()
        .notNullable();
    })

    .createTable('restaurants', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('city', 255).notNullable();
      tbl.string('zipcode', 255).notNullable();
      tbl.string('phone_number', 255).notNullable();
      tbl.string('website', 255);
      tbl.integer('rating');
      tbl.string('notes');
      tbl.integer('stamped');
      tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('restaurants')
    .dropTableIfExists('users');
};
