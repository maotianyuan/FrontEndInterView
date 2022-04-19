function getData(number) {
  return new Promise((resolve) => {
    resolve(`${number}: abc`)
  })
}

function *fetch(){
  const i = yield getData(1);
  const j = yield getData(2);
  return `${i}${j}`;
}

function co (it) {
  return new Promise((resolve, reject) =>{
    const fn = (d) => {
      let { value, done } = it.next(d);
      if (done) {
        resolve(value);
        return;
      }
      value.then(function(data) {
        fn(data)
      })
    }
    fn();
  })
}
co(fetch()).then(() => {

});