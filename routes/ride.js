// eslint-disable-next-line new-cap
const router = require('express').Router();
const Ride = require('../models/Ride');
const { validateNewRide } = require('../models/validator');

// GET all rides
router.get('/', async (req, res) => {
  try {
    const filter = {};
    const rides = await Ride.find(filter);
    if (rides.length === 0 || undefined) return res.status(404).send(rides);
    return res.status(200).send(rides);
  } catch (err) {
    res.status(500).send('Server Error on GET /rides');
  }
});

// GET Ride by Id
router.get('/:id', async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const rides = await Ride.find(filter);
    if (rides.length === 0 || undefined) return res.status(404).send(rides);
    return res.send(rides);
  } catch (err) {
    res.status(500).send(`Server Error on GET /rides/${req.params.id}`);
  }
});

// POST Create one ride
router.post('/', async (req, res) => {
  try {
    // Validate Body for a new Ride
    const { error } = validateNewRide(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const ride = new Ride({
      duration: req.body.duration,
      distance: req.body.distance,
      startTime: new Date(req.body.startTime),
    });
    const savedRide = await ride.save();

    return res.send(savedRide);
  } catch (err) {
    res.status(500).send(`Server Error on GET /rides/${req.params.id}`);
  }
});

// DELETE Ride by id
router.delete('/:id', async (req, res) => {
  try {
    // Find ride to delete
    const rideToDelete = await Ride.findOne({ _id: req.params.id });
    if (!rideToDelete) return res.status(404).send('Ride Id does not exist');

    // Delete ride
    const deletedRide = await Ride.deleteOne({ _id: req.params.id });
    res.send(deletedRide);
  } catch (err) {
    return res.status(500).send(`Server Error on DELETE /rides/${req.params.id}`);
  }
});
module.exports = router;
