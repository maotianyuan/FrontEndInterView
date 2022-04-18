
var dog = {
  name: 'dog name',
  getDog: function () {
    console.log('getDog', this.name, [...arguments])
  }
}

var cat = {
  name: 'cat name',
  getCat: function () {
    console.log('getCat', this.name, [...arguments])
  }
}

cat.getCat.bind(this)();

cat.getCat.bind(dog, 10)(1, 3, 4);

dog.getDog.bind(cat)([4, 5, 6], 7);

var factory = dog.getDog.bind(cat, 1)
var fac = new factory()
fac.name = 'fac name'
console.log(fac)

Function.prototype.myBind = function() {
  
}

// Array.prototype.slice.call(arguments, 1)