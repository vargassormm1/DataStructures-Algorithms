class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hello");
// first.next = new Node("How");
// first.next.next = new Node("Are");

// Node {
//     val: 'Hello',
//     next: Node { val: 'How', next: Node { val: 'Are', next: null } }
//   }

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
// let list = new SinglyLinkedList();
// list.push("Hello");
// list.push("Matt");
// list.push(20);
// console.log(list);

// SinglyLinkedList {
//     head: Node { val: 'Hello', next: Node { val: 'Matt', next: [Node] } },
//     tail: Node { val: 20, next: null },
//     length: 3
//   }
