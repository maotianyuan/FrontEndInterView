- 问题：bootstrap 在弹出layer中，input失效，无法输入文字
- 过程：
  - 排除layer: 找layer官网插件用发现没有问题
  - 排除z-index: 通过页面修改css发现只有modal none才能focus，知道为bootstrap问题
- 解决：tabindex取消
[Bootstrap 弹出框modal上层的输入框不能获得焦点](https://blog.csdn.net/u011127019/article/details/52316987)