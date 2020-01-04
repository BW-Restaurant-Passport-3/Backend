exports.seed = function(knex) {
  return knex('restaurants')
    .truncate()
    .then(function() {
      return knex('restaurants').insert([
        {
          name: 'Crossroads',
          city: 'Los Angeles',
          zipcode: '12345',
          phone_number: '123-456-7890',
          website: 'www.restaurant.com',
          rating: 5,
          notes: 'I like it.',
          stamped: 1,
          user_id: 1,
        },
        {
          name: 'Gracias Madre',
          city: 'Los Angeles',
          zipcode: '12345',
          phone_number: '123-456-7890',
          website: 'www.restaurant.com',
          rating: 2,
          notes: 'Over rated.',
          stamped: 1,
          user_id: 1,
        },

        {
          name: 'Munchies',
          city: 'Santa Ana',
          zipcode: '12345',
          phone_number: '123-456-7890',
          website: 'www.restaurant.com',
          notes: 'Annoying social Media',
          stamped: 0,
          user_id: 1,
        },
        {
          name: 'Native',
          city: 'Costa Mesa',
          zipcode: '12345',
          phone_number: '123-456-7890',
          website: 'www.restaurant.com',
          rating: 4,
          notes: 'I like it.',
          stamped: 1,
          user_id: 2,
        },
      ]);
    });
};
