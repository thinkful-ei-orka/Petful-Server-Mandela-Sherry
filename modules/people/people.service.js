/* eslint-disable indent */
const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // .log('all in queue',people.all());
    return people.all();
  },

  enqueue(person) {
    people.enqueue(person);
    return `${person} joined adoption line`;
  },

  dequeue() {
    people.dequeue();
    return 'Someone left the adoption line';
  }
};
