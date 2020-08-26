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
    console.log('people.get.all', people.all())
    return people.all();
  },

  enqueue(person) {
    people.enqueue(person);
    console.log(`${person} joined adoption line`)
    return `${person} joined adoption line`;
  },

  dequeue() {
    people.dequeue();
    return 'Someone left the adoption line';
  }
};
