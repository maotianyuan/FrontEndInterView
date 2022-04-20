const tree = {
  val: 10,
  left: {
    val: 8,
    left: {
      val: 6,
      left: {
        val: 61,
        right: {
          val: 20,
        },
      },
    },
    right: {
      val: 101,
      right: {
        val: 102,
        left: {
          val: 1021,
        },
      },
    },
  },
  right: {
    val: 19,
    left: {
      val: 15,
    },
    right: {
      val: 22,
      left: {
        val: 20,
      },
    },
  },
};
let result = [];

// 遍历
// 反转
// 深度
// 每行最大值
// 轮廓
const getTree = (node) => {
  if (!node || !node.val) return;
};

console.log(getTree(tree));
console.log(result);

const arr = [
  { id: 10, pid: "" },
  { id: 8, pid: 10 },
  { id: 6, pid: 8 },
  { id: 19, pid: 10 },
  { id: 15, pid: 19 },
  { id: 22, pid: 19 },
  { id: 20, pid: 22 },
];

// let obj = {};
// for (let i = 0 ; i < arr.length; i++) {
//   let {pid, id} = arr[i];
//   if (!pid) {
//     obj[id] = arr[i];
//   } else {
//     let tem = {}
//     // obj[pid].children = arr[i];
//     while(true) {
//       obj[]
//     }
//   }
// }
// console.log(obj);

// https://juejin.cn/post/6983904373508145189#heading-8
