const express = require("express");
const router = express.Router();

// Load input validation
const validateAddPokemonInput = require("../../validation/addpokemon");
// Load Pokemon model
const Pokemon = require("../../models/Pokemon");

router.post("/addpokemon", (req, res) => {
  const { errors, isValid } = validateAddPokemonInput(req.body);
  //Check for validation errors
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //Check if username exists
  Pokemon.findOne({ pokedex: req.body.pokedex }).then(pokemon => {
    if (pokemon) {
      return res.status(400).json({ pokedex: "Pokedex entry already exists" });
    } else {
      const newPokemon = new Pokemon({
        name: req.body.name,
        pokedex: req.body.pokedex,
        attack: req.body.attack,
        hp: req.body.hp
      });
      //SAVE
      newPokemon
        .save()
        .then(user => res.json(pokemon))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
