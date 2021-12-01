// 5.求单链表倒数第 k 个结点，O(n)的时间复杂度

// 思路一
// 定义两个指针：
// 第一个指针从链表的头指针开始遍历向前走k-1步，
// 第二个指针保持不动；从第k步开始，第二个指针也开始从链表的头指针开始遍历；由于两个指针的距离保持在k-1，当第一个指针到达链表的尾结点时，第二个指针正好指向倒数第k个节点。

// 思路二
// 先遍历链表获取链表长度length，然后从头结点开始往后走length-k+1步
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
  /** 删除倒数第N个节点：方式一 */
  removeFrontEnd(k) {
    let num = this.size - k - 1;
    let current = this.head;
    while (num--) {
      current = current.next;
    }
    current.next = current.next.next;
    console.log(current);
    return this.head;
  }
  /** 获取倒数N 个节点，方式一 */
  getFrontEndNode(k) {
    let num = this.size - k;
    let current = this.head;
    while (num--) {
      current = current.next;
    }
    return current;
  }
  /** 获取倒数N 个节点，方式二 */
  getFrontEndNodeTypeTwo(k) {
    let num = k - 1;
    let slow = this.head;
    let fast = this.head;

    while (num--) {
      fast = fast.next;
    }
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }
  /** 删除倒数第N个节点：方式二 */
  removeFrontEndTypeTwo(k) {
    let num = k - 1;
    let slow = this.head;
    let fast = this.head;

    while (num--) {
      fast = fast.next;
    }
    while (fast.next.next) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    // return slow;
    return this.head;
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

// 翻转
const invertLink = (head) => {
  if (!head || !head.next) return head;
  const currentList = invertLink(head.next);
  head.next.next = head;
  head.next = null;
  return currentList;
};

const removeIndexLink = (head, index) => {
  if (!head || !head.next) return head;
  if (index === 0) {
    head = head.next;
    return head;
  }

  let num = 0;
  let current = head;
  while (current && current.next) {
    if (num === index - 1) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
    num++;
  }
  return head;
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

// 翻转后删除第几个 = 删除链表倒是第 N 个
// const result = node.getFrontEndNode(2);
// const result = node.getFrontEndNodeTypeTwo(2);
const result = node.removeFrontEndTypeTwo(2);
console.log(result);
