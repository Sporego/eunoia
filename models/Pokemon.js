const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PokemonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pokedex: {
    type: Number,
    required: true
  },
  attack: {
    type: Number,
    required: true
  },
  hp: {
    type: Number,
    required: true
  }
});
module.exports = Pokemon = mongoose.model("pokemons", PokemonSchema);
