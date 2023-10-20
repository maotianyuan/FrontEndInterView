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

const getTree = (tree, cb) => {
  if (!tree || !tree.val) return tree;
  if (tree.left) getTree(tree.left, cb);
  cb(tree.val)
  if (tree.right) getTree(tree.right, cb);
}
let count = 0;
getTree(tree, (val) => {
  count += val;
});
console.log(count);

// 广度层遍历


const levelOrder = (root) => {
  let target = [];
  if (!root) {
    return target;
  }
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let level = [];
    while (len) {
      let node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
    target.push(level);
  }
  return target;
};

const result = levelOrder(tree);
console.log(result);
