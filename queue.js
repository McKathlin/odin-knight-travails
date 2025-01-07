export default (function() {
  class Queue {
    constructor(arr = []) {
      this._head = null;
      this._tail = null;
      this._length = 0;
      for (const item of arr) {
        this.enqueue(item);
      }
    }

    dequeue() {
      if (this.isEmpty()) {
        return null;
      }

      let nextItem = this._head.data;
      this._head = this._head.next;
      this._length -= 1;
      return nextItem;
    }

    enqueue(item) {
      let newNode = new LinkedListNode(item);
      if (this.isEmpty()) {
        this._head = newNode;
      } else {
        this._tail.next = newNode;
      }
      this._tail = newNode;
      this._length += 1;
    }

    isEmpty() {
      return !this._head;
    }
  }

  class LinkedListNode {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }

  return Queue;
}())