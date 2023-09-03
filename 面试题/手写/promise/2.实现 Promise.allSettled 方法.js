// 实现 Promise.allSettled 方法
function allSettled (iterator) {
  let arr = [];
  let index = 0;
  return new Promise ((resolve, reject) => {
    const handlerPromise = (index, data) => {
      arr[index] = data;
      if (arr.length === iterator.length) {
        resolve(arr);
      }
    }
    for (promise of iterator) {
      promise.then(
        (res) => {
          handlerPromise(index, {
            status: 'success',
            data: res,
          })
        },
        (err) => {
          handlerPromise(index, {
            status: 'error',
            data: err,
          })
        }
      )
      index++;
    }
  })
}