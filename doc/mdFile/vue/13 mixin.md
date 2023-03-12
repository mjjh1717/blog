## Mixin

### 认识Mixin

- 目前我们是使用组件化的方式在开发整个Vue的应用程序，但是组件和组件之间有时候会存在相同的代码逻辑，我们希望对相同的代码逻辑进行抽取。 
- 在Vue2和Vue3中都支持的一种方式就是使用Mixin来完成：
  - Mixin提供了一种非常灵活的方式，来分发Vue组件中的可复用功能；
  - 一个Mixin对象可以包含任何组件选项；
  - 当组件使用Mixin对象时，所有Mixin对象的选项将被 混合 进入该组件本身的选项中；
- **不推荐使用mixin** 
- 原因：mixin这个函数是非常霸道的，局部使用还好，如果是全局使用，在项目比较大的时候，个人觉得不是很好
- 在vue2的时候，因为没有组合式API这一说法，所以mixin对开发人员来说能解决好多事情，但是到了vue3，这种方式已经不推荐使用了，因为我们在vue3中，JS都是在setup里面执行的，这个时候如果我们在外面写一些公共的JS文件，然后暴露出来，在需要使用到的组件里面按需引入，这种比mixin觉得更好

### Mixin的基本使用

- 目录结构

  ![image-20220802113135424](img/image-20220802113135424.png)

- 使用

  ```js
  // 导入
  import messageMixin from '../mixins/message.mixin'
  // 使用
  mixins: [messageMixin]
  ```

### Mixin的合并规则

- 如果Mixin对象中的选项和组件对象中的选项发生了冲突，那么Vue会如何操作呢？
  - 这里分成不同的情况来进行处理；
- 情况一：如果是data函数的返回值对象
  - 返回值对象默认情况下会进行合并；
  - 如果data返回值对象的属性发生了冲突，那么会保留组件自身的数据；
- 情况二：如何生命周期钩子函数
  - 生命周期的钩子函数会被合并到数组中，都会被调用；
- 情况三：值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。
  - 比如都有methods选项，并且都定义了方法，那么它们都会生效；
  - 但是如果对象的key相同，那么会取组件对象的键值对；

### 全局混入 Mixin

- 如果组件中的某些选项，是所有的组件都需要拥有的，那么这个时候我们可以使用全局的mixin：

  - 全局的Mixin可以使用 应用app的方法 mixin 来完成注册；

  - 一旦注册，那么全局混入的选项将会影响每一个组件；

    ```js
    const app = createApp(App);
    app.mixin({
    	created() {
    		console.log("global mixin created");
    	}
    })
    app.mount("#app")
    ```

### externds

- 另外一个类似与Mixin的方式是通过extends属性

  - 允许声明拓展另外一个组件，类似与Mixins；

    ![image-20210825090609046](img/image-20210825090609046.png)

- 在开发中extends用的非常少，在Vue2中比较推荐大家使用Mixin，而且在Vue3中推荐使用Composition API