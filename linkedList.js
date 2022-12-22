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
    this.#length++;
    const newNode = new Node(value);

    if (this.#HEAD === null) this.#HEAD = newNode;
    if (this.#HEAD !== newNode) this.#TAIL.next = newNode;

    if (newNode.next === null) this.#TAIL = newNode;
  }

  prepend(value) {
    this.#length++;
    const newNode = new Node(value);

    if (this.#HEAD) newNode.next = this.#HEAD;

    this.#HEAD = newNode;

    if (!newNode.next) this.#TAIL = newNode;
    else this.#TAIL = newNode.next;
  }

  get size() {
    return this.#length;
  }

  get getHead() {
    return this.#HEAD;
  }

  get getTail() {
    return this.#TAIL;
  }

  at(index) {
    let reqd = this.#HEAD;
    for (let i = 0; i < index; i++) {
      reqd = reqd.next;
    }

    return reqd.value;
  }

  pop() {
    let reqd = this.#HEAD;
    for (let i = 0; i < this.#length - 1; i++) {
      if (i === this.#length - 2) {
        reqd.next = null;
        this.#TAIL = reqd;
      }
      reqd = reqd.next;
    }
  }

  contains(value) {
    let reqd = this.#HEAD;
    for (let i = 0; i < this.#length; i++) {
      if (reqd.value === value) return true;
      reqd = reqd.next;
    }

    return false;
  }

  find(value) {
    let reqd = this.#HEAD;
    for (let i = 0; i < this.#length; i++) {
      if (reqd.value === value) return i;
      reqd = reqd.next;
    }

    return null;
  }

  get toString() {
    let reqd = this.#HEAD;
    let string = "";

    for (let i = 0; i <= this.#length; i++) {
      if (i === this.#length) {
        string += `null`;
      } else {
        string += `${reqd.value} -> `;
        reqd = reqd.next;
      }
    }

    return string;
  }
}

const link = new LinkedList();

link.append("Unix1!");
link.append("Unix2!");
link.append("Unix3!");
link.append("Unix4!");
link.append("Unix5!");
link.append("Unix6!");
link.append("Unix7!");
link.append("Unix8!");

console.log(link.toString);
