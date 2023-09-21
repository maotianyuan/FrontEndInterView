# 编译器 DLS
Vue 中的编译器是一个 特定领域 下的编译器, 领域专用语言 


# vue3 编译主要流程
通过 parse 方法进行解析，得到 AST (是一个用来描述模板的 JS 对象)
通过 transform 方法对 AST 进行转化，得到 JavaScript AST
通过 generate 方法根据 AST 生成 render 函数

Vue 中的编译器，本质上是把 template 模板转化为 render 函数，交给 runtime 运行的一段代码。

# vue3 编译做了哪些优化
> template -> h -> path move -> render(h)
- 编译优化 (将模版编译 template 成渲染函数 h 的过程，尽可能区分静态和动态内容)
    - 静态提升，优化的是 template - h 静态内容直接引用，无需在重新编译，
    - 标记动态结点: flagPath = 1，确认哪些可能会发生变化，参与 diff 比对
    - block tree 不再要求一个根结点，减少了 dom 层级的嵌套，  v-if v-for v-else 
    - 预字符串模版，达到一定量的字符串，直接字符串本身，innerHtml 更新到页面上，减少生成静态的代码体积,
    - 函数缓存，函数不会重新声明



vue3.0 做了哪些优化，从 响应式、编译器、运行时三个角度阐述