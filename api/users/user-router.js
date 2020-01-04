const router = require('express').Router();
const User = require('../users/users-model');

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const restaurants = await User.getRestaurants(id);
    res.status(200).json(restaurants);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error retrieving restaurants from database', err });
  }
});

module.exports = router;
