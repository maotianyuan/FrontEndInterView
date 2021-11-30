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
      this.head = data;
      return;
    }
    let current = this.head;
    while (current.next !== undefined && current.next !== null) {
      current = current.next;
    }
    current.next = data;
  }
}
/** 反转列表 - 递归*/
// const invertList = (head) => {
//   if (!head || !head.next) return head;
//   const currentList = invertList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return currentList;
// };

/** 非递归 */
// current 存的是，上一个的头，默认是 null
// head 的 next 指向，上一个的头
const invertList = (head) => {
  if (!head || !head.next) return head;
  let currentList = null;
  while (head != null) {
    let temp = head.next;
    head.next = currentList;
    currentList = head;
    head = temp;
  }
  return currentList;
};

const node = new List();
let a = new NodeItem("a");
let b = new NodeItem("b");
let c = new NodeItem("c");
let d = new NodeItem("d");
node.add(a);
node.add(b);
node.add(c);
node.add(d);

console.log(invertList(node.head));
