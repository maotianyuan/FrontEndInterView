/////////////豪华分割线///////////////////

("use strict");
var a = 1;
console.log(a); //1
{
  console.log(a); // a = 1
  function a() {
    console.log(1); // 1
  }
}
console.log(a);
