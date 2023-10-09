function getData(number) {
  return new Promise((resolve) => {
    resolve(`${number}: abc`);
  });
}

function* fetch() {
  const i = yield getData(1);
  const j = yield getData(2);
  return `${i}${j}`;
}


// data.next().value 返回的是 promise, 它有 then
function co(it) {
 
}
co(fetch()).then(() => {});
