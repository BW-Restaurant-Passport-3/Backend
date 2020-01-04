exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          username: 'user1',
          password: 'password',
          name: 'Yoshi',
          city: 'Los Angeles',
          email: 'yoshi@email.com',
        },
        {
          username: 'user2',
          password: 'password',
          name: 'Luigi',
          city: 'Irvine',
          email: 'luigi@email.com',
        },
        {
          username: 'user3',
          password: 'password',
          name: 'Koopa',
          city: 'Santa Monica',
          email: 'koopa@email.com',
        },
      ]);
    });
};
