## 获取组件对象

### $refs的使用

- 某些情况下，我们在组件中想要直接获取到元素对象或者子组件实例：

  - 在Vue开发中我们是不推荐进行DOM操作的；
  - 这个时候，我们可以给元素或者组件绑定一个ref的attribute属性；
- 组件实例有一个$refs属性：
  - 它一个对象Object，持有注册过 ref attribute 的所有 DOM 元素和组件实例。

### $parent和$root

- 我们可以通过$parent来访问父元素。
  - HelloWorld.vue的实现：
  - 这里我们也可以通过$root来实现，因为App是我们的根组件；
- **注意：在Vue3中已经移除了$children的属性，所以不可以使用了。**

```vue
<template>
  <div class="app">
    <h2 ref="title" class="title" :style="{ color: titleColor }">{{ message }}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner"/>
  </div>
</template>

<script>
  import Banner from "./Banner.vue"

  export default {
    components: {
      Banner
    },  
    data() {
      return {
        message: "Hello World",
        titleColor: "red"
      }
    },
    methods: {
      changeTitle() {
        // 1.不要主动的去获取DOM, 并且修改DOM内容
        // this.message = "你好啊, 李银河!"
        // this.titleColor = "blue"

        // 2.获取h2/button元素
        console.log(this.$refs.title)
        console.log(this.$refs.btn)

        // 3.获取banner组件: 组件实例
        console.log(this.$refs.banner)
        
        // 3.1.在父组件中可以主动的调用子组件的对象方法
        this.$refs.banner.bannerClick()

        // 3.2.获取banner组件实例, 获取banner中的元素
        console.log(this.$refs.banner.$el)

        // 3.3.如果banner template是多个根, 拿到的是第一个node节点
        // 注意: 开发中不推荐一个组件的template中有多个根元素
        // console.log(this.$refs.banner.$el.nextElementSibling)

        // 4.组件实例还有两个属性(了解):
        console.log(this.$parent) // 获取父组件
        console.log(this.$root) // 获取根组件 
      }
    }
  }
</script>

<style scoped>
</style>

```

```vue
<template>
  <div class="banner">
    <h2>Banner</h2>
  </div>
  <!-- <div class="banner">
    <h2>Banner</h2>
  </div> -->
</template>

<script>
  export default {
    created() {
      
    },
    methods: {
      bannerClick() {
        console.log("bannerClick")
      }
    }
  }
</script>

<style scoped>
</style>
```