const express = require('express');
const cors = require('cors');
const {CLIENT_ORIGIN} = require('../../config');
const app = express();

app.use(cors({
    origin: CLIENT_ORIGIN
}));

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));
app.use('/api/cat', require('../cat/cat.router'));
app.use('/api/dog', require('../dog/dog.router'));

module.exports = app;
