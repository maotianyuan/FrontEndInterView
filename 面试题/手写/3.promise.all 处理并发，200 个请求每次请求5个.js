// promise.all 处理并发，200 个请求每次请求 5 个

// 版本一
let promiseData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 有一个错了就全部错了
      // if (data === 10) {
      //   reject(10);
      // }
      resolve(data);
    }, 10);
  });
};

let fetchData = async (data, step = 5) => {
  const len = data.length;
  const result = [];
  for (let i = -1; i < len; i += step) {
    let arr = [];
    for (let j = i + 1; j < i + step + 1 && j < len; j++) {
      arr.push(promiseData(j));
    }
    const target = await Promise.all(arr);
    console.log(target);
    result.push(...target);
  }
  return result;
};

await fetchData(new Array(200), 5);

// 错误的重发

let createData = (count) => {
  return Array.from(new Array(count), (_, i) => i);
};

let promiseData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 有一个错了就全部错了
      if (data === 10) {
        reject(10);
      }
      resolve(data);
    }, 10);
  });
};

let fetchData = async (data, step = 5) => {
  const len = data.length;
  let resule = [];
  for (let i = -1; i < len; i += step) {
    let arr = [];
    for (let j = i + 1; j < i + step + 1 && j < len; j++) {
      arr.push(promiseData(data[j]));
    }
    const target = await Promise.allSettled(arr);
    resule.push(...target);
  }
  return resule;
};

let handlerResult = async () => {
  const result = await fetchData(createData(200), 5);
  console.log("result", result);

  const rejectCollect = result.filter((item) => item.status === "rejected");
  console.log("rejectCollect", rejectCollect);

  if (rejectCollect.length > 0) {
    let retry = 3;
    let retryData = rejectCollect;
    while (retry) {
      console.log(
        "while",
        retryData.map((item) => item.reason)
      );
      const target = await fetchData(
        retryData.map((item) => item.reason),
        5
      );
      const rejectRetry = target.filter((item) => item.status === "rejected");
      console.log("rejectRetry", rejectRetry);
      if (rejectRetry.length <= 0) {
        break;
      }
      retryData = rejectRetry;
      console.log("retry 次数", retry);
      retry--;
    }
  }
};
await handlerResult();
