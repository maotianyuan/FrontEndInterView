let template = "我是<name1> 年龄<age2>";
let data = {
  name1: "aaa",
  age2: 16,
};
render(template, data);

function render(template, data) {
  const reg = /<([\w\d]+)>/;
  if (reg.test(template)) {
    const name = reg.exec(template)[1];
    template = template.replace(reg, data[name]);
    return render(template, data);
  }
  return template;
}
