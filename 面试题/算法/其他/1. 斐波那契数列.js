// 1、1、2、3、5、8、13、21、34、55、89、144、233、377、610、987、1597、2584、4181、6765、10946、…
// 1、2、3、4、5、6、 7、 8、 9、10、11、 12、 13、 14、 15、 16、 17、   018、19、   20、21、…

// 普通递归
const fib = (n) => {
  if (n == 1 || n ==2) {
    return 1;
  }
  return fib(n - 1) + fib(n-2)
}

const r = fib(20)
console.log(r)

// https://www.cnblogs.com/superlizhao/p/11603158.html


// 普通for循环

function fibonacci(n) {
  var n1 = 1, n2 = 1, sum;
  for (let i = 2; i < n; i++) {
    sum = n1 + n2
    n1 = n2
    n2 = sum
  }
  return sum
}
console.log(fibonacci(20))

