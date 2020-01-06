const router = require('express').Router();
const Restaurant = require('./restaurant-model');

router.post('/', async (req, res) => {
  const postData = req.body;

  try {
    const post = await Restaurant.add(postData);
    res.status(201).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error posting restaurant to database', err });
  }
});

router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.getAll();
    res.status(200).json(restaurants);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error retrieving restaurants from database', err });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.getById(id);
    res.status(200).json(restaurant);
  } catch (err) {
    res
      .status(500)
      .json({ error: `Error retrieving restaurant with id of ${id}` });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const update = await Restaurant.update(id, updateData);
    res.status(200).json(update);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Error updating restaurant to database', err });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletion = await Restaurant.remove(id);
    res.status(200).json(deletion);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user from database', err });
  }
});

module.exports = router;
