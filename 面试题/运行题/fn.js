var i = 20;
function fn() {
  // 经过fn()(4)函数的调用，此时i是18
  i -= 2; // 17
  return function (n) {
    // 传入参数5
    console.log(++i - n); //18+1-5=14 此时i值是19 // 18 - 4
  };
}

var f = fn();
f(1);
f(2);
fn()(3);
fn()(4);
f(5);
console.log(i);
