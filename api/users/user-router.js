const router = require('express').Router();
const User = require('../users/users-model');

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const restaurants = await User.getRestaurants(id);

    if (restaurants) {
      res.status(200).json(restaurants);
    } else {
      res
        .status(404)
        .json({
          message: 'User does not have any restaurants in his passport',
        });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error retrieving restaurants from database', err });
  }
});

module.exports = router;
