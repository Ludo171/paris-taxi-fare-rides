const { dbClient } = require('./database-client');

const rideSchema = new dbClient.Schema({
  duration: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
    unique: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
});

module.exports = dbClient.model('Ride', rideSchema);
