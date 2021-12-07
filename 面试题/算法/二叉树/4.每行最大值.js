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

// let result = []
const getTree = (tree, deep = 0) => {
  if (!tree || !tree.val) return tree;
  result[deep] = result[deep] || [];
  result[deep].push(tree.val);
  if (tree.left) getTree(tree.left, deep + 1);
  if (tree.right) getTree(tree.right, deep + 1);
}
// getTree(tree, 0);
// console.log(result);

const getMax = (data) => {
  return data.map(item => {
    return Math.max(...item)
  })
}

// console.log(getMax(result));


// -----
let result = []
const getTreeMaxLine = (tree, deep = 0, result) => {
  if (!tree || !tree.val) return tree;
  result[deep] = Math.max(result[deep] || -1 , tree.val);
  if (tree.left) getTreeMaxLine(tree.left, deep + 1, result);
  if (tree.right) getTreeMaxLine(tree.right, deep + 1, result);
}
getTreeMaxLine(tree, 0, result);
console.log(result);