// Function.prototype.myNew = function (context) {
//   let obj = Object.create(this.prototype);
//   let arg = Array.prototype.slice.call(arguments);
//   const result = fn.call(obj, ...arg);
//   return typeof result === 'object' ? result : obj;
// };

function myNew(context, ...args) {
  let obj = Object.create(context.prototype);
  let result = context.call(obj, ...args);
  return result instanceof Object ? result : obj;
}
