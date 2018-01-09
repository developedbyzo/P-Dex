const mongoose = require('./connection')

const PokieSchema = new mongoose.Schema({
  url: String,
  index: Number,
  name: String,
  type1: String,
  type2: String
})

const Pokie = mongoose.model('Pokie', PokieSchema)

module.exports = Pokie
