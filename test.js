// function hi() {
//   function hello() {
//     function hey() {}
//     hey();
//   }
//   hello();
// }
// hi();

// console.log(a);
// b();
// var a = 10;
// function b() {
//   console.log("Hello");
// }

if (true) {
  var a = 10;
} else {
  var b = 20;
}

console.log(a);
console.log(b);

var obj = {
  name: "Bob",
  age: 30,
  adress: {
    city: "New York",
    street: "Water",
    defineThis: function () {
      console.log(this === obj);
    },
  },
};
obj.address.defineThis();
