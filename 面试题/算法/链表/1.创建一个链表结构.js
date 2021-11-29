class NodeItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class List {
  constructor() {
    this.head = null;
  }
  add(data) {
    if (!this.head) {
      this.head = data
      return;
    } 
    let current = this.head;
    while (current.next !== undefined && current.next !== null) {
      current = current.next;
    }
    current.next = data;
  }
}

const node = new List();
let a = new NodeItem('a')
let b = new NodeItem('b')
let c = new NodeItem('c')
let d = new NodeItem('d')
node.add(a)
node.add(b)
node.add(c)
node.add(d)