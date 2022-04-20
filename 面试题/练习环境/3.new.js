function myNew(context, ...args) {}

function _create(context) {
  function fn() {}
  fn.prototype == context;
  return new fn();
}
