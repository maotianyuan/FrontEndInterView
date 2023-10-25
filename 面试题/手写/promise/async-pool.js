// ES6

function asyncPool(poolLimit, array, iteratorFn) {
  let i = 0;
  const ret = [];
  const executing = [];
  const enqueue = function () {
    // ① 边界条件，array 为空或者 promise 都已达到 resolve 状态
    if (i === array.length) {
      return Promise.resolve();
    }
    const item = array[i++];

    // ② 生成一个 promise 实例，并在 then 方法中的 onFullfilled 函数里返回实际要执行的 promise，
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);

    // ④ 将执行完毕的 promise 移除
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    // ③ 将正在执行的 promise 插入 executing 数组
    executing.push(e);

    let r = Promise.resolve();
    // ⑥ 如果正在执行的 promise 数量达到了并发限制，则通过 Promise.race 触发新的 promise 执行
    if (executing.length >= poolLimit) {
      r = Promise.race(executing);
    }

    // ⑤ 递归执行 enqueue，直到满足 ①
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));
}

// ES7

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储所有正在执行的任务
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    // 调用iteratorFn函数创建异步任务
    ret.push(p);
    // 保存新的异步任务

    if (poolLimit <= array.length) {
      // 当poolLimit小于等于总任务数量时，进行并发控制
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      // 当任务完成后，从正在执行的任务队列中移除任务，腾出一个空位
      executing.push(e);
      // 加入正在执行的异步任务

      if (executing.length >= poolLimit) {
        await Promise.race(executing);
        // 有任务执行完成之后，进入下一次循环
      }
    }
  }
  return Promise.all(ret); // 所有任务完成之后返回
}

