// 6.将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

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
    while (current && current.next) {
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
    let str = "";
    while (current) {
      str += current.value + "->";
      current = current.next;
    }
    str += "null";
    return str;
  }
}

const contactList = (left, right) => {
  let v1 = left.value;
  let v2 = right.value;
  let node = v1 > v2 ? {
    value: right.value,
    next: null
  } : {
    value: left.value,
    next: null
  };

  while(left.next && right.next) {
    left = left.next;
    right = right.next;

    let current = node
    while(current.next !== undefined && current.next !== null) {
      current = current.next;
    }
    current.next = {
      value: left.value < right.value ? left.value : right.value,
      next: null,
    }
    current.next.next = {
      value: left.value < right.value ? right.value : left.value,
      next: null,
    }
  }
  
  return node;
}

const node1 = new List();
let a1 = new NodeItem("1");
let b1 = new NodeItem("3");
let c1 = new NodeItem("10");

let a2 = new NodeItem("1");
let b2 = new NodeItem("2");
let c2 = new NodeItem("30");

node1.add(a1);
node1.add(b1);
node1.add(c1);

const node2 = new List();

node2.add(a2);
node2.add(b2);
node2.add(c2);

// console.log(node1)
// console.log(node2)


const result = contactList(node1.head, node2.head);
console.log(result);




// const mergeTwoLists = function (l1, l2) {
//   if (l1 === null) {
//       return l2;
//   }
//   if (l2 === null) {
//       return l1;
//   }
//   if (l1.value < l2.value) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   } else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//   }
// };


// const result = mergeTwoLists(node1.head, node2.head);
// console.log(result);