/* eslint-disable indent */
const express = require('express');
const json = require('body-parser').json();

const Pets = require('../pets/pets.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  let firstDog = Pets.getFirst();
  res.status(200).json(firstDog[1]);
});

module.exports = router;
