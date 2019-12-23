//Sequential colelction of elements
//nodes hat a value and a next pointer
//music player...every song is a node >> circular where head and tail point to each other
//arrays have direct access, linked list have sequential access. better for memory not for lookup
//very good at adding or removing nodes


//doubley linked
class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null
  }

  append(value) {
    if(!this.tail) {
      this.head = this.tail = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }


  prepend(value) {
    if (!this.head) {
      this.tail = this.head = new Node(value)
    } else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }


  deleteHead() {
    if (!this.head) {
      return null
    } else {
      let oldHead = this.head
      if(this.tail === this.head) {
        this.tail = this.head = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      return oldHead.value
    }
  }


  deleteTail() {
    if(!this.tail) {
      return null
    } else {
      let oldTail = this.tail
      if(this.tail === this.head) {
        this.tail = this.head = null
      } else {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      return oldTail.value
    }
  }


  search(value) {
    let current = this.head

    while(current){
      if (current.value === value) {
        return current
      } else {
        current = this.head.next
      }
    }
    return null
  }
}

