var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;

  sss(); // 绑定: 默认window

  person.sayName(); // 绑定: 隐式绑定person

  (person.sayName)(); // 绑定: 隐式绑定person

  (b = person.sayName)(); // 术语: 默认绑定window
}

sayName();
// 输出结果
// window
// person
// person
// window
