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

let order = (data) => {
  let target = [];
  const deep = (node) => {
    if (!node) return
    // if (node.val) {
    //   target.push(node.val);
    // }
    Object.keys(node).map((item) => {
      let current = node[item]; // left 对象、right 对象
      target.push(current.val)
      // deep(current)
      // current.val && target.push(current.val);
      // deep(current);
    });
  };
  deep(data);
  return target;
};

const result = order(tree);
console.log(result)
// console.log(getTree(tree));
// console.log(result);