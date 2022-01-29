export class LinkedList {
  constructor() {
    this.list = []
    this.add = this.add.bind(this)
    this.getHead = this.getHead.bind(this)
  }
  add(item) {
    this.list = [...this.list, item]
  }
  isEmpty() {
    return this.list.length === 0
  }
  getHead() {
    return class {
      constructor() {
        this.list = this.list
        this.index = 0
        this.value = 0
      }
      getNext() {
        if (this.index + 1 <= this.list.length) {
          this.index += 1
        }
        return Node
      }
    }
  }
}
