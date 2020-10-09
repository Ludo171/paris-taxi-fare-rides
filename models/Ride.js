const { dbClient } = require('./database-client');

const rideSchema = new dbClient.Schema({
  id: {
    type: Number,
    required: true,
  },
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
    type: String,
    required: true,
  }
});

module.exports = dbClient.model('Ride', rideSchema);
