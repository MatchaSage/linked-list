class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    let node = new nodeFactory(value, this.head);
    this.head = node;
    this.size++;
    //Sets the tail if the list size is 0
    if (this.tail == null) {
      this.tail = node;
    }
  }

  append(value) {
    let node = new nodeFactory(value);
    //Sets node as tail if list size is 1
    if (this.tail == null) {
      this.tail = node;
    }
    //Sets node as head if list size is 1
    if (this.head == null) {
      this.head = node;
    } else {
      let previousNode = this.tail;
      this.tail = node;
      this.tail.next = null;
      previousNode.next = this.tail;
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < this.size) {
      let currentNode = this.head;
      for (let i = 0; i <= index; i++) {
        if (i == index) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
    }
  }

  pop() {
    let length = this.size;
    //Gets the index of the element before the last one
    let newTail = this.at(length - 2);
    newTail.next = null;
    this.tail = newTail;
    this.size--;
  }

  contains(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let listArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      listArr.push(`(${currentNode.value})`);
      currentNode = currentNode.next;
    }
    listArr.push("null");
    let joinArr = listArr.join(" -> ");
    return joinArr;
  }

  insertAt(value, index) {
    if (index <= this.size - 1) {
      if (index == this.size - 1) {
        this.append(value);
      } else if (index == 0) {
        this.prepend(value);
      } else {
        let currentNode = this.at(index);
        let nextNode = this.at(index + 1);
        let node = new nodeFactory(value, nextNode);
        currentNode.next = node;
        this.size++;
      }
    } else {
      console.log("Index out of range");
    }
  }

  removeAt(index) {
    if (index > this.size - 1 || index < 0) {
      console.log("index out of range");
    } else {
      let currentNode = this.at(index);
      let previousNode = this.at(index - 1);
      let nextNode = this.at(index + 1);
      if (index == this.size - 1) {
        this.tail = previousNode;
        previousNode.next = null;
      } else if (index == 0) {
        this.head = nextNode;
        currentNode.next == null;
      } else {
        currentNode.next = null;
        previousNode.next = nextNode;
      }
      this.size--;
    }
  }
}

function nodeFactory(value, next = null) {
  return {
    value: value,
    next: next,
  };
}

let newList = new LinkedList();

newList.prepend("head");
newList.prepend("newHead");
newList.append("tail");
let stringList = newList.toString();
console.log(stringList);
