const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
  id: Number,
  name: String,
  tradeable: Boolean,
  shopPrice: Number,
  exchangePrice: String,
  url: String
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;