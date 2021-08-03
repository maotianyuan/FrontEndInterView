## CSS盒模型
- 标准模型+IE模型
- 标准模型/IE区别 计算宽高不同
- CSS如何设置这两种模型
- js如何设置获取盒模型对应的宽高
- 盒模型解释边距重叠
- BFC(边距重叠解决)


### 标准模型+IE模型
    标准: margin padding border content 
    IE模型: 宽高包括 padding border

### 标准模型/IE区别 计算宽高不同
    标准: 宽度不包括padding border
    IE模型: 宽高包括 padding border

### CSS如何设置这两种模型
    box-sizing:content-box  //标准 浏览器默认
    box-sizing:border-box   //IE

### js如何设置获取盒模型对应的宽高
    dom.style.width/height  只能取dom节点的内敛属性, link style节点这两种方式不支持
    dom.currentStyle.width/height 三种方法，浏览器计算之后相对准确的  缺：只有IE支持
    window.getComputedStyle(dom).width/height 兼容性好
    dom.getBoundingClientRect().width/height 绝对位置 相对viewport的left top width height四个值

### 盒模型解释边距重叠

### BFC(边距重叠解决)
  基本概念：块级格式化上下文
  原理(渲染规则)
    1: BFC在垂直方向上会发生重叠
    2: BFC区域不会与浮动元素的box重叠
    3: BFC是个独立，外面元素不会影响到里面的，反过来也成立
    4: 计算BFC高度的时候，浮动元素也参与计算
  如何创建BFC
    1: float != none
    2: position != static/relative 
    3: display == table系列 table-cell、table-caption
    4: overflow != visibile 