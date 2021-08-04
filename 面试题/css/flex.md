
## 容器
display: flex
align-item: center;baseline;
justify-content: space-between;flex-start;flex-end;center;space-around;
flex-direction: column; row; row-reverse; column-reverse
flex-wrap: nowrap; wrap; wrap-reverse
align-content: flex-start;

## 项目属性
flex: 0 1 auto; 不放大、要缩小 默认
flex: auto(1 1 auto); 有放大、有缩小
flext: none(0,0,auto); 不放大、不缩小
flex: 放大 缩小
align-self: 覆盖父亲的 align-item, 定义单个 align-self 
order: 排序值越小越靠前