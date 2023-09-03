// generator next 遍历

function fetchData (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        resolve(data)
      })
      .catch(err => {
        reject(err);
      })
  })
}

function* myGenerator() {
  const r1 = yield fetchData('/');
  const r2 = yield fetchData('/');
  console.log(r1, r2, 'print');
  return {
    r1,
    r2,
  }
}
const data = myGenerator();
// 手动遍历
// data.next().value.then(item => {
//   console.log('top then', item)

//   data.next(item).value.then(i => {
//     data.next(i);
//     console.log('bottom then', i)
//   }).catch(err => {
//     console.log('bottom catch', err)
//   })
// }).catch(err => {
//   console.log('top catch', err)
// })

function co(generator) {
  const it = generator();
  return new Promise((resolve, reject) => {
    const next = (target) => {
      if (target.done) { resolve(target.value) }
      target.value.then((data)=>{
        const result = it.next(data)
        next(result)
      }).catch(err => {
        reject(err);
      })
    }
    next(it.next());
  })
}

const abc = co(myGenerator);




// console.log(it.next().value)
