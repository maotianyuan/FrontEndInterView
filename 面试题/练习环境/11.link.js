class Link {
  constructor(){
    this.list = null
  }
  add(value) {
    if (!this.list) {
      this.list = {
        val: value,
        next: null
      }
      return;
    }
    let temp = this.list;
    while(temp.next) {
      temp = temp.next
    }
    temp.next = {
      val: value,
      next: null,
    }
  }
}
let list = new Link()
list.add('a');
list.add('b');
list.add('c');
list.add('d');
// console.log(list);

const invertList = (head) => {
  if(!head || !head.next) return head;
  let currentList = null;
  while(head != null) {
    let temp = head.next;
    head.next = currentList;
    currentList = head;
    head = temp;
  }
  return currentList;
}

// const invertList = (node) => {
//   if (!head || !head.next) return head;
//   const currentList = invertList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return currentList;
// }

console.log(invertList(list.list));

