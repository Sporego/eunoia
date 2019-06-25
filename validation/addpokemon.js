const validator = require("validator");
const isEmpty = require("is-empty");

function validateAddPokemonInput(data) {
  const errors = {};
  // Convert empty fields to "" for validator function
  data.name = !isEmpty(data.name) ? data.name : "";
  data.pokedex = !isEmpty(data.pokedex) ? data.pokedex : "";
  data.attack = !isEmpty(data.attack) ? data.attack : "";
  data.hp = !isEmpty(data.hp) ? data.hp : "";
  // name checks
  if (validator.isEmpty(data.name)) {
    errors.name = "Pokemon must have a name";
  }
  // pokedex checks
  if (validator.isEmpty(data.pokedex)) {
    errors.pokedex = "Pokedex national number is required";
  }
  // attack checks
  if (validator.isEmpty(data.attack)) {
    errors.attack = "Pokemon must have attack value";
  }
  // hp checks
  if (validator.isEmpty(data.hp)) {
    errors.hp = "Pokemon must have hp value";
  }

  //return errors if any
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = validateAddPokemonInput;
