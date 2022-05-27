// let
function fn() {
  var a = 1;
  let b = 2;
  {
    let b = 3;
    var c = 4;
    let d = 5;
    console.log(a, b, c, d);
  }
  {
    let b = 6;
    let d = 7;
    console.log(a, b, c, d);
  }
}
fn();
