/* eslint-disable indent */
const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() { 
    let nextCat = pets.cats.show();
    console.log(pets.cats.show());
    let nextDog =pets.dogs.show();
    return [nextCat, nextDog];
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type.toLowerCase() === 'cat') {
      pets.cats.dequeue();
      return 'Cat adopted';
    }

    else if(type.toLowerCase() === 'dog') {
      pets.dogs.dequeue();
      return 'Dog adopted';
    }

    else {
      return 'Error: Pet Type Invalid';
    }
  }
};
