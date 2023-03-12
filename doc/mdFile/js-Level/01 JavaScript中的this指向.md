## Js函数的this指向

### 为什么需要this？

- 在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言中的this不太一样： 

  - 常见面向对象的编程语言中，比如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中。 
  - 也就是你需要有一个类，类中的方法（特别是实例方法）中，this代表的是当前调用对象。 
  - 但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义。 

- 我们来看一下编写一个obj的对象，有this和没有this的区别 

  ```js
  var obj = {
    name: "mjjh",
    eating: function() {
      console.log(obj.name + "在吃东西")
    },
    running: function() {
      console.log(obj.name + "在跑步")
    },
    studying: function() {
      console.log(obj.name + "在学习")
    }
  }
  ```

  ```js
  var obj = {
    name: "mjjh",
    eating: function() {
      console.log(this.name + "在吃东西")
    },
    running: function() {
      console.log(this.name + "在跑步")
    },
    studying: function() {
      console.log(this.name + "在学习")
    }
  }
  ```

### this指向什么呢？

- 我们先说一个最简单的，this在全局作用于下指向什么？

  - 这个问题非常容易回答，在浏览器中测试就是指向window 

    ```js
    // 在大多数情况下, this都是出现在函数中
    // 在全局作用域下
    // 浏览器: window(globalObject)
    // Node环境: {}
    console.log(this)
    // console.log(window)
    
    ```

- 但是，开发中很少直接在全局作用于下去使用this，通常都是在函数中使用。 

  - 所有的函数在被调用时，都会创建一个执行上下文： 
  - 这个上下文中记录着函数的调用栈、AO对象等； 
  - this也是其中的一条记录； 

### this到底指向什么呢？

- 我们先来看一个让人困惑的问题： 

  - 定义一个函数，我们采用三种不同的方式对它进行调用，它产生了三种不同的结果

- 这个的案例可以给我们什么样的启示呢？ 

  1. 函数在调用时，JavaScript会默认给this绑定一个值； 
  2. this的绑定和定义的位置（编写的位置）没有关系； 
  3. this的绑定和调用方式以及调用的位置有关系； 
  4. this是在运行时被绑定的； 

- 那么this到底是怎么样的绑定规则呢？一起来学习一下吧 

  - 绑定一：默认绑定； 

  - 绑定二：隐式绑定； 

  - 绑定三：显示绑定； 

  - 绑定四：new绑定； 

    ```js
    // this指向什么, 跟函数所处的位置是没有关系的
    // 跟函数被调用的方式是有关系
    
    function foo() {
      console.log(this)
    }
    
    // 1.直接调用这个函数
    foo()
    
    // 2.创建一个对象, 对象中的函数指向foo
    var obj = {
      name: 'mjjh',
      foo: foo
    }
    
    obj.foo()
    
    // 3.call/apply调用
    foo.apply("abc")
    
    ```

### 规则一：默认绑定

- 什么情况下使用默认绑定呢？独立函数调用。 

  - 独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用； 

- 我们通过几个案例来看一下，常见的默认绑定

  ```js
  // 默认绑定: 独立函数调用
  // 1.案例一: 
  // window
  function foo() {
    console.log(this)
  }
  
  foo()
  ```

  ```js
  // 2.案例二:
  // window
  // window
  // window
  function foo1() {
    console.log(this)
  }
  
  function foo2() {
    console.log(this)
    foo1()
  }
  
  function foo3() {
    console.log(this)
    foo2()
  }
  
  foo3()
  ```

  ```js
  // 3.案例三:
  // window
  // mjjh
  var obj = {
    name: "mjjh",
    foo: function() {
      console.log(this)
    }
  }
  
  var bar = obj.foo
  bar()
  var bar2 = obj
  bar2.foo()
  ```

  ```js
  // 4.案例四:
  // window
  function foo() {
    console.log(this)
  }
  var obj = {
    name: "mjjh",
    foo: foo
  }
  
  var bar = obj.foo
  bar() 
  ```

  ```js
  // 5.案例五:
  // window
  // obj
  function foo() {
    function bar() {
      console.log(this)
    }
    return bar
  }
  
  var fn = foo()
  fn() // window
  
  var obj = {
    name: "mjjh",
    eating: fn
  }
  
  obj.eating() // 隐式绑定
  ```

  

### 规则二：隐式绑定

- 另外一种比较常见的调用方式是通过某个对象进行调用的：
  - 也就是它的调用位置中，是通过某个对象发起的函数调用。 
- 我们通过几个案例来看一下，常见的隐式绑定定

```js
// 隐式绑定: object.fn()
// object对象会被js引擎绑定到fn函数的中this里面
// 环境

function foo() {
  console.log(this)
}

// 独立函数调用
// foo()
```

```js
// 1.案例一:
// obj
function foo() {
  console.log(this)
}
var obj = {
  name: "mjjh",
  foo: foo
}

obj.foo() // obj对象

```

```js
// 2.案例二:
// obj
// obj
// window
var obj = {
  name: "mjjh",
  eating: function() {
    console.log(this.name + "在吃东西")
  },
  running: function() {
    console.log(obj.name + "在跑步")
  }
}

obj.eating()
obj.running()

var fn = obj.eating
fn()
```

```js
// 3.案例三:
// obj2
var obj1 = {
  name: "obj1",
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name: "obj2",
  bar: obj1.foo
}

obj2.bar()
```

### 规则三：显式绑定

- 隐式绑定有一个前提条件： 
  - 必须在调用的对象内部有一个对函数的引用（比如一个属性）； 
  - 如果没有这样的引用，在进行调用时，会报找不到该函数的错误； 
  - 正是通过这个引用，间接的将this绑定到了这个对象上； 
- 如果我们不希望在 对象内部 包含这个函数的引用，同时又希望在这个对象上进行强制调用，该怎么做呢？ 
  - JavaScript所有的函数都可以使用call和apply方法（这个和Prototype有关）。 
  - 它们两个的区别这里不再展开； 
    - 其实非常简单，第一个参数是相同的，后面的参数，apply为数组，call为参数列表； 
    - 这两个函数的第一个参数都要求是一个对象，这个对象的作用是什么呢？就是给this准备的。 
  - 在调用这个函数时，会将this绑定到这个传入的对象上。 
  - 因为上面的过程，我们明确的绑定了this指向的对象，所以称之为 显式绑定。

#### call、apply、bind

- 通过call或者apply绑定this对象 

  - 显示绑定后，this就会明确的指向绑定的对象 

  - 如果传入的内容不是一个对象则会给他包装一个类对象,如果传入undefined则会指向window

    ```js
    function foo() {
      console.log("函数被调用了", this)
    }
    
    // 1.foo直接调用和call/apply调用的不同在于this绑定的不同
    // foo直接调用指向的是全局对象(window)
    foo()
    
    var obj = {
      name: "obj"
    }
    
    // call/apply是可以指定this的绑定对象
    foo.call(obj)
    foo.apply(obj)
    foo.apply("aaaa")
    ```

  - call和apply的区别

    - 实际上就是以不同的方式接收参数
      - call
        - 以参数列表的形式接收参数
      - apply
        - 以数组的形式接收参数

    ```js
    function sum(num1, num2, num3) {
      console.log(num1 + num2 + num3, this)
    }
    
    sum.call("call", 20, 30, 40)
    sum.apply("apply", [20, 30, 40])
    ```

  - call和apply在执行函数时,是可以明确的绑定this, 这个绑定规则称之为显示绑定

- bind

  - 会返回一个新的函数

  - 如果我们希望一个函数总是显示的绑定到一个对象上，可以怎么做呢？

    ```js
    function foo() {
      console.log(this)
    }
    
    // foo.call("aaa")
    // foo.call("aaa")
    // foo.call("aaa")
    // foo.call("aaa")
    
    // 默认绑定和显示绑定bind冲突: 优先级(显示绑定)
    
    var newFoo = foo.bind("aaa")
    
    newFoo()
    newFoo()
    newFoo()
    newFoo()
    newFoo()
    newFoo()
    
    var bar = foo
    console.log(bar === foo)
    console.log(newFoo === foo)
    
    ```

#### 内置函数的绑定思考

- 有些时候，我们会调用一些JavaScript的内置函数，或者一些第三方库中的内置函数。 

  - 这些内置函数会要求我们传入另外一个函数； 
  - 我们自己并不会显示的调用这些函数，而且JavaScript内部或者第三方库内部会帮助我们执行； 
  - 这些函数中的this又是如何绑定的呢？ 

- setTimeout、数组的forEach、div的点击

  ```js
  // 1.setTimeout 都是绑定到window上的
  setTimeout(function() {
    console.log(this) // window
  }, 2000)
  ```

  ```js
  // 2.监听点击
  const boxDiv = document.querySelector('.box')
  boxDiv.onclick = function() {
    console.log(this) // boxDiv
  }
  ```

  ```js
  // 3.数组.forEach/map/filter/find
  var names = ["abc", "cba", "nba"]
  names.forEach(function(item) {
    console.log(item, this)// 默认this指向window
  }, "abc")// 传入第二个参数则this指向传入的参数
  names.map(function(item) {
    console.log(item, this) // 默认this指向window
  }, "cba")// 传入第二个参数则this指向传入的参数
  ```

### 规则五: new绑定

- JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字。 

- 使用new关键字来调用函数是，会执行如下的操作： 

  1. 创建一个全新的对象； 

  2. 这个新对象会被执行prototype连接； 

  3. 这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）； 

  4. 如果函数没有返回其他对象，表达式会返回这个新对象； 

     ```js
     // 我们通过一个new关键字调用一个函数时(构造器), 这个时候this是在调用这个构造器时创建出来的对象
     // this = 创建出来的对象
     // 这个绑定过程就是new 绑定
     
     function Person(name, age) {
       this.name = name
       this.age = age
     }
     
     var p1 = new Person("mjjh", 18)
     console.log(p1.name, p1.age)
     
     var p2 = new Person("kobe", 30)
     console.log(p2.name, p2.age)
     
     
     var obj = {
       foo: function() {
         console.log(this)
       }
     }
     ```

### 规则优先级

- 学习了四条规则，接下来开发中我们只需要去查找函数的调用应用了哪条规则即可，但是如果一个函数调用位置应用了多条规则，优先级谁更高呢？ 
- new绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.foo()) > 默认绑定(独立函数调用)
- 默认规则的优先级最低 

  - 毫无疑问，默认规则的优先级是最低的，因为存在其他规则时，就会通过其他规则的方式来绑定this 
- 显示绑定优先级高于隐式绑定 

 ```js
  // var obj = {
  //   name: "obj",
  //   foo: function() {
  //     console.log(this)
  //   }
  // }
  
  // obj.foo()
  
  // 1.call/apply的显示绑定高于隐式绑定
  // obj.foo.apply('abc')
  // obj.foo.call('abc')
  
  // 2.bind的优先级高于隐式绑定
  // var bar = obj.foo.bind("cba")
  // bar()
  
  
  // 3.更明显的比较
  function foo() {
    console.log(this)
  }
  
  var obj = {
    name: "obj",
    foo: foo.bind("aaa")
  }
  
  obj.foo()
 ```

- new绑定优先级高于隐式绑定 

  ```js
   var obj = {
     name: "obj",
     foo: function() {
       console.log(this)
     }
   }
   
   // new的优先级高于隐式绑定
   var f = new obj.foo()
  ```

- new绑定优先级高于bind

  - new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高

  - new绑定可以和bind一起使用，new绑定优先级更高 

   ```js
  // 结论: new关键字不能和apply/call一起来使用
  
  // new的优先级高于bind
  function foo() {
    console.log(this)
  }
  
  // var bar = foo.bind("aaa")
  
  // var obj = new bar()
  
  // new绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.foo()) > 默认绑定(独立函数调用)
   ```

### this规则之外 – 忽略显示绑定 

- 我们讲到的规则已经足以应付平时的开发，但是总有一些语法，超出了我们的规则之外。（神话故事和动漫中总是有类似这样的人物） 
- 如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则：

```js
function foo() {
  console.log(this)
}

var obj = {
  name: "mjjh"
}
foo.apply(obj)  // obj
foo.apply("abc")  // String {"abc"}
foo.apply({})  // {}对象

// apply/call/bind: 当传入null/undefined时, 自动将this绑定成全局对象
foo.apply(null)  // window
foo.apply(undefined)  // window

var bar = foo.bind(null)
bar()  // window
```

### this规则之外 - 间接函数引用

- 另外一种情况，创建一个函数的 间接引用，这种情况使用默认绑定规则。 

  - 赋值(obj2.foo = obj1.foo)的结果是foo函数； 
  - foo函数被直接调用，那么是默认绑定；

  ```js
  // 争论: 代码规范 ;
  
  var obj1 = {
    name: "obj1",
    foo: function() {
      console.log(this)
    }
  }
  
  var obj2 = {
    name: "obj2"
  };
  
  // obj2.bar = obj1.foo
  // obj2.bar()
  
  (obj2.bar = obj1.foo)()
  ```

### 箭头函数 arrow function

- 箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式更加简洁

  - 箭头函数不会绑定this、arguments属性
  - 箭头函数不能作为构造函数来使用（不能和new一起来使用，会抛出错误）

- 箭头函数如何编写呢？

  - ()：函数的参数

  - {}：函数的执行体

    ```js
    nums.forEach((item, index, arr) => {
      
    })
    ```

#### 箭头函数的编写优化

- 优化一: 如果只有一个参数()可以省略

```js
nuns.forEach(item => {})
```

- 优化二: 如果函数执行体中只有一行代码,那么可以省略大括号

```js
nums.forEach(item => console.log(item))
nums.filter(item => true)
```

- 优化三: 如果函数执行体只有返回一个对象,那么需要给这个对象加上()

```js
var foo = () => {
	return { name: "abc"}
}
var bar = () => ({name: "abc"})
```

### this规则之外 – ES6箭头函数

- 在ES6中新增一个非常好用的函数类型： 箭头函数 

  - 这里不再具体介绍箭头函数的用法，可以自行学习。 

- 箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this。 

- 我们来看一个模拟网络请求的案例： 

  - 这里我使用setTimeout来模拟网络请求，请求到数据后如何可以存放到data中呢？ 

  - 我们需要拿到obj对象，设置data； 

  - 但是直接拿到的this是window，我们需要在外层定义：var _this = this _

  - 在setTimeout的回调函数中使用_this就代表了obj对象

    ```js
    var obj = {
      data: [],
      getData: function() {
        // 发送网络请求, 将结果放到上面data属性中
        // 在箭头函数之前的解决方案
        var _this = this
        setTimeout(function() {
          var result = ["abc", "cba", "nba"]
          _this.data = result
        }, 2000);
      }
    }
    ```

#### ES6箭头函数this

- 之前的代码在ES6之前是我们最常用的方式，从ES6开始，我们会使用箭头函数： 

  - 为什么在setTimeout的回调函数中可以直接使用this呢？ 

  - 因为箭头函数并不绑定this对象，那么this引用就会从上层作用于中找到对应的this 

    ```js
    var obj = {
      data: [],
      getData: function() {
        setTimeout(() => {
          // 模拟获取到的数据
          var result = ["abc", "cba", "nba"]
          this.data.push(...result)
        }, 2000);
      }
    }
    ```

    ```js
    var obj = {
      data: [],
      getData: () => {
        setTimeout(() => {
          console.log(this) // window
        }, 2000);
      }
    }
    ```

- 思考：如果getData也是一个箭头函数，那么setTimeout中的回调函数中的this指向谁呢？ 

### 面试题一：

```js
var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  sss();
  person.sayName();
  (person.sayName)();
  (b = person.sayName)();
}

sayName();

// window: 独立函数调用
// person: 隐式调用
// person: 隐式调用
// window: 赋值表达式(独立函数调用)
```

### 面试题二： 

```js
var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function() {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function() {
    return function() {
      console.log(this.name)
    }
  },
  foo4: function() {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1(); 
person1.foo1.call(person2); 

person1.foo2(); 
person1.foo2.call(person2); 

person1.foo3()();
person1.foo3.call(person2)();
person1.foo3().call(person2); 

person1.foo4()(); 
person1.foo4.call(person2)(); 
person1.foo4().call(person2); 

// person1(隐式绑定)
// person2(显示绑定优先级大于隐式绑定)

// window(不绑定作用域,上层作用域是全局)
// window

// window(独立函数调用)
// window(独立函数调用)
// person2(最终调用返回函数式, 使用的是显示绑定)

// person1(箭头函数不绑定this, 上层作用域this是person1)
// person2(上层作用域被显示的绑定了一个person2)
// person1(上层找到person1)
```

### 面试题三：

```js
var name = 'window'

function Person (name) {
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

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() p1
person1.foo1.call(person2) p2

person1.foo2() p1
person1.foo2.call(person2) p1

person1.foo3()() w
person1.foo3.call(person2)() w
person1.foo3().call(person2) p2

person1.foo4()() p1
person1.foo4.call(person2)() p2
person1.foo4().call(person2) p1

// person1
// person2(显示高于隐式绑定)

// person1 (上层作用域中的this是person1)
// person1 (上层作用域中的this是person1)

// window(独立函数调用)
// window
// person2

// person1
// person2
// person1
```

### 面试题四：

```js
var name = 'window'

function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function() {
      return function() {
        console.log(this.name)
      }
    },
    foo2: function() {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() w
person1.obj.foo1.call(person2)() 
person1.obj.foo1().call(person2) 

person1.obj.foo2()() 
person1.obj.foo2.call(person2)()
person1.obj.foo2().call(person2)


// window
// window
// person2
// obj
// person2
// obj


// 上层作用域的理解
// var obj = {
//   name: "obj",
//   foo: function() {
//     // 上层作用域是全局
//   }
// }

// function Student() {
//   this.foo = function() {

//   }
// }
```
