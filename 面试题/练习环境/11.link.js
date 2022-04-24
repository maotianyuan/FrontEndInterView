class Link {
  constructor(){
    this.list = null
    this.size = 0;
  }
  /** 新增 */
  add(value) {
    if (!this.list) {
      this.list = {
        val: value,
        next: null
      }
      this.size = 1;
      return;
    }
    let temp = this.list;
    while (temp.next !== null) {
      temp = temp.next;
    }
    this.size++;
    temp.next = {
      val: value,
      next: null,
    };
  }
  /** 遍历 */
  print() {
    let head = this.list;
    console.log('->', head.val);
    while(head.next){
      head = head.next;
      console.log('->', head.val);
    }
  }
  /** 删除第 N 个节点 */
  deleteN(index) {
    let head = this.list;
    if (index > this.size || index <= 0){
      console.log(`${index} 不在1-${this.size}之间`)
      return;
    };
    if (index === 1) {
      this.list = head.next;
      this.size--;
      return;
    }
    let start = 2;
    
    while(head && head.next) {
      if (start === index) {
        head.next = head.next.next;
        this.size--;
      }
      head = head.next;
      start++;
    }
  }
  /** 删除第 N 个节点 */
  deleteInVerseN(index) {
    let number = this.size - index + 1;
    console.log('删除-正数第', number)
    this.deleteN(number);
  }
  hasCircle() {
    let slow = this.list;
    let fast = this.list;
    while(slow.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}
let list = new Link()
list.add('a');
list.add('b');
list.add('c');
list.add('d');

list.list.next.next.next = list.list.next;
console.log(list);

// list.print();

// list.deleteN(1);
// list.print();

// list.deleteInVerseN(1); // d
// list.print();

console.log(list.hasCircle());


// 创建新增
// 遍历
// 删除 第 N 个节点
// 删除倒数 第 K 个节点
// 是否有环

// 合并有序
// 反转
// 反转 n 到 m
