const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

const { ListNode } = require('../extensions/index.js');

function removeKFromList(l, k) {
  let head = l;
  let newListNode; //l[1], l[2]
  let pointer; //1
  while (head !== null) {
    if (head.value != k) {
      if (newListNode) {
        let tail = new ListNode(head.value);
        pointer.next = tail;
        pointer = tail; // pointer = pointer.next
      } else {
        newListNode = new ListNode(head.value);
        pointer = newListNode;
      }
    }
    head = head.next;
  }
  return newListNode;
}

module.exports = {
  removeKFromList,
};
