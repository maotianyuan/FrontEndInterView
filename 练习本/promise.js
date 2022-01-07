// new Promise(() => {

// })


// then 进行订阅
// resolve 进行发布

const getData =() => {
  // const data = new Promise((resolve, reject) => {
  const data =  new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('mty');
    }, 1000)
  }).then((data) => {
    console.log(data, '1-them');
  }).then((data) => {
    console.log(data, '2-them');
  })
}

class MyPromise {
  constructor(executor) {
    this.success = []
    this.status = 'PENDING';
    this.resolve = (data) => {
      setTimeout(() => {
        if (this.status === 'PENDING') {
          this.value = data;
          this.status = 'RESOLVE';
          this.success.map(fn => fn(data));
        }
      })
    };
    executor(this.resolve);
  }
  then(fn) {
    return new MyPromise((resolve) => {
      let status = this.status;
      // console.log(status, '111');
      switch(status) {
        case 'PENDING':
          // console.log('abc');
          this.success.push(() => {
            fn(this.value);
            resolve(this.value);
          })
          console.log(this.success)
        case 'RESOLVE': 
          console.log('RESOLVE');
          // fn(this.value);
          // console.log(this.value, 'abc');
          // resolve(this.value);
      }
    })
  }
}
getData()