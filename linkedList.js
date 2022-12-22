const Node = require("./Node.js");

class LinkedList {
  #HEAD;
  #TAIL;
  #length;

  constructor() {
    this.#HEAD = null;
    this.#TAIL = null;
    this.#length = 0;
  }

  append(value) {
    this.length++;
    const newNode = new Node(value);

    if (this.HEAD === null) this.HEAD = newNode;
    if (this.HEAD !== newNode) this.TAIL.next = newNode;

    if (newNode.next === null) this.TAIL = newNode;
  }

  prepend(value) {
    this.length++;
    const newNode = new Node(value);

    if (this.HEAD) {
      newNode.next = this.HEAD;
      // this.TAIL = newNode.next;
    }

    this.HEAD = newNode;

    if (!newNode.next) this.TAIL = newNode;
    else this.TAIL = newNode.next;
  }
}

const link = new LinkedList();

link.append("Hello");
// console.log(link);

// link.prepend("Hi!");
// console.log(link);

link.append("Unix!");
// console.log(link);

link.append("Unix1!");
// console.log(link);

link.append("Unix2!");
// console.log(link);

link.append("Unix3!");

link.append("Unix4!");

console.log(link.length);
link.length = 8;
console.log(link.length);
