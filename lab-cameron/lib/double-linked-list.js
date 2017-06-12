'use strict';

const DoubleLinkedList = module.exports = function(head, tail) {
  this.head = head || null;
  this.tail = tail || null;
};

const Node = function(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

DoubleLinkedList.prototype.append = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.head) return this.head = this.tail = new Node(val);

  let node = new Node(val);

  this.head.next = node;
  node.prev = this.head;
  this.head = this.head.next;
  this.length++;
  return this.head;
};

DoubleLinkedList.prototype.prepend = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.tail) return this.tail = this.head = new Node(val);


  let node = new Node(val);

  this.tail.prev = node;
  node.next = this.tail;
  this.tail = this.tail.prev;
  this.length++;
  return this.tail;
};
