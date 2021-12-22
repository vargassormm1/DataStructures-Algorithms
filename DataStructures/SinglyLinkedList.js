class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new Node("Hello");
first.next = new Node("How");
first.next.next = new Node("Are");

console.log(first);

// Node {
//     val: 'Hello',
//     next: Node { val: 'How', next: Node { val: 'Are', next: null } }
//   }
