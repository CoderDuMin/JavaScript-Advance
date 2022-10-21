var name = 'window'


// {} -> 对象
// {} -> 代码块
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }


// 开始题目:
person1.foo1(); // 隐式绑定 this:person1
person1.foo1.call(person2); //  显示绑定 this:person2

person1.foo2(); // 箭头函数 找上层作用域 this:window
person1.foo2.call(person2); // 箭头函数 没有this 还是找上层作用域 this:window

person1.foo3()(); // 相当于默认绑定 this:window
person1.foo3.call(person2)(); //  还是相当于默认绑定 this:window
person1.foo3().call(person2); // 对返回的函数使用call 显示绑定 this:person2

person1.foo4()(); // 箭头函数 寻找上层作用域里的this, this:person1
person1.foo4.call(person2)(); // 箭头函数 寻找上层作用域里的this,此时上层作用域this显示绑定为person2, 所以this:person2
person1.foo4().call(person2); // 箭头函数 寻找上层作用域里的this,箭头函数显示绑定this无效, 所以this:person1

//输出结果为
/*
person1
person2

window
window

window
window
person2

person1
person2
person1

*/  