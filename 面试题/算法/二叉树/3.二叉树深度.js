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
        }
      }
    },
    right: {
      val: 101,
      right: {
        val: 102,
        left: {
          val: 1021
        }
      }
    }
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

// 遍历
// 累加

// 先序：10-> 8 -> 6->61 -> 20-> 101 -> 102 -> 1021 -> 19 -> 15 -> 22 -> 20
// 中序 左根右：61-> 20 -> 6->8 -> 101 -> 1021-> 102 -> 10 -> 15 -> 19 -> 20 -> 22
// 后序：20 -> 61 -> 6 -> 1021 -> 102 -> 101 -> 8 -> 15 -> 20 -> 22 -> 19 -> 10

let result = []
const getTree = (tree, deep = 0) => {
  if (!tree || !tree.val) return tree;
  result.push(deep)
  console.log(result);
  // deep = deep > Math.max(deep );
  if (tree.left) getTree(tree.left, deep + 1);
  if (tree.right) getTree(tree.right, deep + 1);
}
getTree(tree, 0);
console.log(Math.max(...result));

let max = 0
const getTreeV2 = (tree, deep = 0) => {
  if (!tree || !tree.val) return tree;
  max = max > deep ? max : deep;
  if (tree.left) getTreeV2(tree.left, deep + 1);
  if (tree.right) getTreeV2(tree.right, deep + 1);
}
getTreeV2(tree, 0);
console.log(max);
