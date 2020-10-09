// eslint-disable-next-line new-cap
const router = require('express').Router();
const Ride = require('../models/Ride');

// GET all rides
// |--> Get all rides
router.get('/', async (req, res) => {
  console.log('Should Send all rides');
});

// GET Ride by Id
// |--> Get one ride
router.put('/:id', async (req, res) => {
  console.log('should send one ride');
});

// DELETE Ride by id
// |--> Delete ride by id
router.delete('/:id', async (req, res) => {
  console.log('Should delete one ride');
});
module.exports = router;
