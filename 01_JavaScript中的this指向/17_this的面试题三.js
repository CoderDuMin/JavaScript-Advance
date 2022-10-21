var name = 'window'

/*
  1.创建一个空的对象
  2.将这个空的对象赋值给this
  3.执行函数体中代码
  4.将这个新的对象默认返回
*/
function Person(name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

// 
var person1 = new Person('person1')
var person2 = new Person('person2')


// 面试题目:
person1.foo1() // person1
person1.foo1.call(person2) // person2
person1.foo2() // 箭头函数 通过new创建  person1
person1.foo2.call(person2) // 箭头函数 通过new创建 person1

person1.foo3()() // window
person1.foo3.call(person2)() // window
person1.foo3().call(person2) // person2

person1.foo4()() // person1
person1.foo4.call(person2)() //  person2
person1.foo4().call(person2) // person1