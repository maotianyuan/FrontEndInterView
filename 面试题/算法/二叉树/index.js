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

//////// 遍历 //////// 

// 中：左-根-右
// 先：根-左-右
// 后：左-右-根
const getTraversal = (node) => {
  if (!node.val) return ;
  console.log(node.val);
  if(node.left) getTraversal(node.left);
  if (node.right) getTraversal(node.right);
}
// getTraversal(tree)

//////// 反转 //////// 

const getReverseTree = (node) => {
  if (!node || !node.val) return node;
  if(node.left) getReverseTree(node.left);
  if (node.right) getReverseTree(node.right);
  console.log(node)
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
}
// getReverseTree(tree)


//////// 深度 //////// 
let max = 0;
const getDeepth = (node, deep) => {
  if (!node || !node.val) return node;
  max = max < deep ? deep + 1 : max
  if(node.left) getDeepth(node.left, deep + 1);
  if (node.right) getDeepth(node.right, deep + 1);
}
// getDeepth(tree, 0)
// console.log(max)

//////// 最大值 //////// 
// let target = [];
// const getLevelMax = (node, d, result) => {
//   if (!node || !node.val) return node;
//   result[d] = Math.max(result[d] || -1, node.val)
//   if(node.left) getDeepth(node.left, d + 1, result);
//   if (node.right) getDeepth(node.right, d + 1, result);
// }
// getLevelMax(tree, 0, target)
// console.log(target)

function levelTreeMax (node, d, result) {
  if (!node || !node.val) return node
  result[d] = Math.max(result[d] || -1, node.val)
  if (node.left) {
    levelTreeMax(node.left, d+1, result)
  }
  if (node.right) {
    levelTreeMax(node.right, d+1,result)
  }
}
var target = []
const result = levelTreeMax(tree, 0, target)
console.log(target)