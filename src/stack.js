const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  //adds the element to the stack
  push(element) {
    this.arr[this.index] = element;
    this.index++;
    console.log(`${element} added to ${this.index}`);
    return this.index - 1;
  }

  //returns the top element from stack and deletes it, returns 1
  pop() {
    if (this.index == 0) {
      return undefined;
    }

    let itemDelete = this.arr[this.index - 1];
    this.index--;
    console.log(`removed ${itemDelete}`);
    return itemDelete;
  }

  //returns the peek, but doesn't delete it, returns 1
  peek() {
    console.log(`show last element ${this.arr[this.index - 1]}`);
    return this.arr[this.index - 1];
  }
}

// const stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.peek();
// stack.pop();
// stack.peek();

module.exports = {
  Stack,
};
