let template = "我是{{name}} 年龄{{age}}";
let data = {
  name: "aaa",
  age: 16,
};
render(template, data);

function render(template, data) {
  const reg = /\{\{(\w+)\}\}/;
  if (reg.test(template)) {
    const name = reg.exec(template)[1];
    template = template.replace(reg, data[name]);
    return render(template, data);
  }
  return template;
}
