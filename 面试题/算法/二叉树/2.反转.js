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

const getInvertTree = (tree) => {
  if(!tree || !tree.val) return null;
  if(tree.left) getInvertTree(tree.left);
  if(tree.right) getInvertTree(tree.right);
  // console.log(tree);
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  return tree;
}

console.log(getInvertTree(tree));