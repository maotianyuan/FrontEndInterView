// 4.删除链表中倒数第 N 个节点

class NodeItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data) {
    if (!this.head) {
      this.head = data;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next !== undefined && current.next !== null) {
      current = current.next;
    }
    current.next = data;
    this.size++;
  }
  /** 删除第几项 */
  remove(index) {
    if (!this.head || !this.head.next) return this.head;
    
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let num = 0;
    let current = this.head;
    while(current && current.next) {
      if (num === index - 1) {
        current.next = current.next.next;
        break;
      }
      current = current.next;
      num++;
    }
  }
  print() {
    let current = this.head;
    let str = '';
    while(current) {
      str += current.value + '->';
      current = current.next;
    }
    str+='null'
    return str;
  }
}

// 翻转
const invertLink = (head) => {
  if (!head || !head.next) return head;
  const currentList = invertLink(head.next);
  head.next.next = head;
  head.next = null;
  return currentList;
}

const removeIndexLink = (head, index) => {
  if (!head || !head.next) return head;
  if (index === 0) {
    head = head.next;
    return head;
  }

  let num = 0;
  let current = head;
  while(current && current.next) {
    if (num === index - 1) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
    num++;
  }
  return head;
}
const node = new List();
let a = new NodeItem("a");
let b = new NodeItem("b");
let c = new NodeItem("c");
let d = new NodeItem("d");
node.add(a);
node.add(b);
node.add(c);
node.add(d);

// 删除
// node.remove(0);
// console.log(node.print());

// 反转
const invertNode = invertLink(node.head);
console.log(invertNode); // d\c\b\a

// 翻转后删除第几个 = 删除链表倒是第 N 个
const result = removeIndexLink(invertNode, 0)
console.log(result);