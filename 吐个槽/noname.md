## 想dasiUI系列

>圆圈和线条粗心一致

![WX20190412-093123@2x](./images/WX20190412-093123@2x.png)
![椭圆形](./images/椭圆形.png) 
![WechatIMG75](./images/WechatIMG75.png) 

>是的找UI切了个图，把透明空心圆变成空心不透明圆圈，结果svg图格式跟iconfont还不一样没有path,自己转把;结果图片格式不规范，是的我搜了svg多个path合并成一个放弃，用base64了,可以了。

>基于echarts为找到直接api，将圆圈变成一个图片，图片圆圈内不能透明

- 最终效果
![WX20190412-100915@2x](./images/WX20190412-100915@2x.png) 
```
  symbol: 'path://M512 1024c-281.6 0-512-230.4-512-512s230.4-512 512-512 512 230.4 512 512-230.4 512-512 512z m0-853.333333c-187.733333 0-341.333333 153.6-341.333333 341.333333s153.6 341.333333 341.333333 341.333333 341.333333-153.6 341.333333-341.333333-153.6-341.333333-341.333333-341.333333z',
  symbol: 'emptyCircle', // 自带空心圆圈,
  symbol: 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU1MDMzNjk4NjYxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA4MTkuMmEzMDcuMiAzMDcuMiAwIDEgMCAwLTYxNC40IDMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6IG0wIDIwNC44QTUxMiA1MTIgMCAxIDEgNTEyIDBhNTEyIDUxMiAwIDAgMSAwIDEwMjR6IiBmaWxsPSIjMjdEMzhBIiBwLWlkPSIyMDI2Ij48L3BhdGg+PHBhdGggZD0iTTUxMiA4MTkuMmEzMDcuMiAzMDcuMiAwIDEgMCAwLTYxNC40IDMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyMDI3Ij48L3BhdGg+PC9zdmc+',
    
```

[base64图片转化](http://imgbase64.duoshitong.com/)
