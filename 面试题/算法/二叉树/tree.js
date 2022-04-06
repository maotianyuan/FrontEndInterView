const data = [
  { id: 1, name: '张三', children: [2, 3] },
  { id: 2, name: '李四', children: [4, 5, 6] }, 
  { id: 3, name: '王五', children: [7, 8] },
  { id: 4, name: '赵4' }, 
  { id: 5, name: '赵5' }, 
  { id: 6, name: '赵6' }, 
  { id: 7, name: '赵7' },
  { id: 8, name: '赵8' },
];
// 返回值 ['张三-李四-赵4', '张三-李四-赵5', '张三-李四-赵6', '张三-王五-赵 7', '张三-王五-赵8']
// 根据员工关系原始数据，返回所有基层员工汇报链路;比如入参 

const getChainTree = (target = []) => {
  let data = target

  const getValue = (id = '') => {
    const child =  data.find(item => item.id === id)
    data = data.filter(item => item.id !== id)
    return child
  }

  data.map((item) => {
    if (!item.children) return;
    item.children.forEach((value, index) => {
      item.children[index] = getValue(value)
    })
  })
  return data
}


const getTraveTree = (tree, cb, str = '',) => {
  if (tree.name) {
    str += tree.name
  }

  if (tree.children) {
    str += '-'
    tree.children.forEach(item => {
      getTraveTree(item, cb, str)
    })
  } else {
    cb(str)
  }
}

const getResult = (data = []) => {
  if (!data) return []
  if (!Array.isArray(data)) return []

  const result = []
  data.forEach(item => {
    getTraveTree(item, value => {
      result.push(value)
    })
  })
  return result
}

const tree = getChainTree(data)
const result = getResult(tree)

console.log(tree)
console.log(result)