// 6、树结构转化数组、数组转化树结构

// 数组转化为树 一层 pid
const arr = [
  { 'id': '29', 'pid': '', 'name': '总裁办' },
  { 'id': '2c', 'pid': '', 'name': '财务部' },
  { 'id': '2d', 'pid': '2c', 'name': '财务核算部' },
  { 'id': '2f', 'pid': '2c', 'name': '薪资管理部' },
  { 'id': 'd2', 'pid': '', 'name': '技术部' },
  { 'id': 'd3', 'pid': 'd2', 'name': 'Java研发部' }
]

var array = [
  {pid: 4, id: 6617, name: "a",subNode:[]},
  {pid: 5, id: 666, name: "a",subNode:[]},
  {pid: 4, id: 6616, name: "a",subNode:[]},
  {pid: 6616, id: 66161, name: "a",subNode:[]},
  {pid: -1, id: 0, name: "a",subNode:[]},
  {pid: 0, id: 4, name: "a",subNode:[]},
  {pid: 0, id: 5, name: "a",subNode:[]},
  {pid: 4, id: 10, name: "a",subNode:[]},
  {pid: 10, id: 451, name: "a",subNode:[]},
  {pid: 0, id: 98, name: "a",subNode:[]},
  {pid: 98, id: 23, name: "a",subNode:[]},
  {pid: 98, id: 523, name: "a",subNode:[]}
];

// let obj = {};
// for (let i = 0 ; i < arr.length; i++) {
//   let {pid, id} = arr[i];
//   if (!pid) {
//     obj[id] = arr[i];
//   } else {
//     obj[pid].children = arr[i];
//   }
// }
// console.log(obj);

const getTreeHead = (data) => {
  const head = []
  data.map(item => {
    if (!item.pid) {
      head.push(item);
    }
  })
  data.map(item => {
    if (item.pid) {
      const target = head.find(i => i.id === item.pid) || {};
      target.children = target.children  || []
      target.children.push(item);
    }
  })
  return head;
}

// console.log(getTreeHead(arr));




///////////////// 多层嵌套
const arr2 = [
  { id: 10, pid: '' },
  { id: 8, pid: 10 },
  { id: 6, pid: 8 },
  { id: 19, pid: 10 },
  { id: 15, pid: 19 },
  { id: 22, pid: 19 },
  { id: 20, pid: 22 }
]


///////////////// 树结构转化数组
const tree = {
  val: 10,
  left: {
    val: 8,
    left: {
      val: 6
    },
  },
  right: {
     val: 19,
    left: {
      val: 15
    },
    right: {
      val: 22,
      left: {
        val: 20
      },
    }
  }
}

const getArr = (tree, result = [], prev) => {
  if (!tree || !tree.val) return ;
  result.push({
    id: tree.val,
    pid: (prev && prev.val) ? prev.val : ''
  });
  if (tree.left) getArr(tree.left, result, tree)
  if (tree.right) getArr(tree.right, result, tree)
};

// let result = []
// const target = getArr(tree, result);
// console.log(result);