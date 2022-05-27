function two() {
  console.log(a);
}
function one() {
  var a = 2;
  two();
}
var a = 1;
one();
