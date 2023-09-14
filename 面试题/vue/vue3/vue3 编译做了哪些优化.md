# vue3 编译做了哪些优化
> template -> h -> path move -> render(h)
- 编译优化 (将模版编译 template 成渲染函数 h 的过程，尽可能区分静态和动态内容)
    - 静态提升，优化的是 template - h 静态内容直接引用，无需在重新编译，
    - 标记动态结点: flagPath = 1，确认哪些可能会发生变化，参与 diff 比对
    - block tree 不再要求一个根结点，减少了 dom 层级的嵌套，  v-if v-for v-else 
    - 预字符串模版，达到一定量的字符串，直接字符串本身，innerHtml 更新到页面上，减少生成静态的代码体积,
    - 函数缓存，函数不会重新声明

- 响应式