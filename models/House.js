const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildSchema = new Schema ({
  name: String,
  hotSpot: String
})

const roomSchema = new Schema ({
  name: String,
  coordinates: String,
  face: String,
  cost: Number,
  builds: [buildSchema]
});

const houseSchema = new Schema ({
  rooms: [roomSchema]
});

const House = mongoose.model("House", houseSchema);

module.exports = House;