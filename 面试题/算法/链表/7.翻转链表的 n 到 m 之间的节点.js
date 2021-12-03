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

/** 反转链表前 N 个节点 */
let successor = null;
const invertListN = (head, n) => {
  if (!head || !head.next) return head;
  if (n == 1) {
    successor = head.next;
    return head;
  }
  const currentList = invertListN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return currentList;
};

const node = new List();
let a = new NodeItem("a");
let b = new NodeItem("b");
let c = new NodeItem("c");
let d = new NodeItem("d");
let e = new NodeItem("e");
let f = new NodeItem("f");
node.add(a);
node.add(b);
node.add(c);
node.add(d);
node.add(e);
node.add(f);

// console.log(invertListN(node.head, 3));

const reverseBetween = (head, m, n) => {
  if (m === 1) {
    return invertListN(head, n);
  }
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
};

reverseBetween(node.head, 3, 5);
