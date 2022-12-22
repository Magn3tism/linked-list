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

  at(index) {
    let reqd = this.#HEAD;
    for (let i = 0; i < index; i++) {
      reqd = reqd.next;
    }

    return reqd.value;
  }

  pop() {
    let reqd = this.#HEAD;
    if (this.#length === 1) {
      this.#HEAD = null;
      this.#TAIL = null;
    }

    for (let i = 0; i < this.#length - 1; i++) {
      if (i === this.#length - 2) {
        reqd.next = null;
        this.#TAIL = reqd;
      }
      reqd = reqd.next;
    }

    this.#length--;
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

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let reqd = this.#HEAD;
    let prev = {};
    for (let i = 0; i <= index - 1; i++) {
      reqd = reqd.next;
      if (i === index - 2) {
        prev = reqd;
      }
      if (i === index - 1) {
        let newNode = new Node(value);
        prev.next = newNode;
        newNode.next = reqd;
      }
    }

    this.#length++;
  }

  deleteAt(index) {
    if (index === this.#length) {
      this.pop();
      return;
    }
    let reqd = this.#HEAD;
    let prev = {};
    for (let i = 0; i <= index - 1; i++) {
      reqd = reqd.next;
      if (i === index - 2) prev = reqd;
      if (i === index - 1) prev.next = reqd.next;
    }

    this.#length--;
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

  get size() {
    return this.#length;
  }

  get getHead() {
    return this.#HEAD.value;
  }

  get getTail() {
    return this.#TAIL.value;
  }
}
