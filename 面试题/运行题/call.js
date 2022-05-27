var name = "window";

var person1 = {
  name: "person1",
  foo4: function () {
    return () => {
      console.log(this, "mty");
      console.log(this.name);
    };
  },
};

var person2 = { name: "person2" };

person1.foo4().call(person2);
