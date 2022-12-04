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
    //Sets current tails next pointer to the new created node
    this.tail.next = node;
    //Sets new node as the new tail
    this.tail = node;
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
    } else {
      console.log("Index out of range");
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
}

function nodeFactory(value, next = null) {
  return {
    value: value,
    next: next,
  };
}

let newList = new LinkedList();
newList.prepend(12);
newList.prepend(200);
newList.prepend(50);
newList.prepend(90);
newList.append(23);
