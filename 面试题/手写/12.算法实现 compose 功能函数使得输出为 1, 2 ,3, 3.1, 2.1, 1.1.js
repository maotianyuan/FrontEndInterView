// 算法实现 compose 功能函数使得输出为 1, 2 ,3, 3.1, 2.1, 1.1

let middleware = [];

// const compose = (fns) => {
//   return fns.reduceRight((next, prev) => {
//     return (...args) => {
//       next(prev(...args));
//     };
//   });
// };

const request = async () => {
  return new Promise((resolve, reject) => {
    fetch("/")
      .then((data) => {
        console.log(data, "---");
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
middleware.push(async (next) => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});

const compose = (middleware) => {
  const dispatch = async (index) => {
    if (index >= middleware.length) return;
    let curr = middleware[index];
    curr(() => dispatch(++index));
  };
  dispatch(0);
};

// compose(middleware);


const fn = () => {
  console.log(1);
  (() => {
    console.log(2);
    (() => {
      console.log(3);
      (() => {})();
      console.log(3.1);
    })();
    console.log(2.1);
  })();
  console.log(1.1);
}
fn();