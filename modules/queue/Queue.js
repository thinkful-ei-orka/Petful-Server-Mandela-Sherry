/* eslint-disable indent */
class _LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _LLNode(data);
    // Add some data to the queue.
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }

  show() {
    // Return the next item in the queue.
    return this.first.next.data;
  }

  all() {
    // Return all items in the queue.
    let node = this.first;
    let all = [];

    while (node.next !== null) {
      all.push(node.data);
      node = node.next;
    }

    return all;
  }
}

module.exports = Queue;