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

function co(it) {}
co(fetch()).then(() => {});
