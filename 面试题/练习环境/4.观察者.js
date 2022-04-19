class Subject {
  constructor(){
    this.observeList = [];
  }
  add(observer) {
    this.observeList.push(observer)
  }
  trigger() {
    this.observeList.map(item => item.update());
  }
}

class Observer {
  constructor(fn){
    this.fn = fn;
  }
  update() {
    this.fn();
  }
}

const subject = new Subject();
const a = new Observer(() => {console.log('a')});
const b = new Observer(() => {console.log('b')});
subject.add(a)
subject.add(b)
subject.trigger()