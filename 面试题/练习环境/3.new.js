function myNew(context, ...args) {
  let obj = Object.create(context.prototype);
  let result = context.call(obj, ...args);
  return typeof result === 'object' ? result : obj;
}

function _create(context) {
  function fn() {}
  fn.prototype == context;
  return new fn();
}

let obj = new fn()