class Subject {}

class Observer {}

const subject = new Subject();
const a = new Observer(() => {
  console.log("a");
});
const b = new Observer(() => {
  console.log("b");
});
subject.add(a);
subject.add(b);
subject.trigger();
