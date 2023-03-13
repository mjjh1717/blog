import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/nav/": [
    {
      text: "链接🔗",
      items: [
        { text: "HTMLCss", link: "/childPage/htmlCss" },
        { text: "JavaScript基础", link: "/childPage/js-Prim" },
        { text: "JavaScript进阶", link: "/childPage/js-Level" },
        { text: "前端工程化", link: "/childPage/ftdEng" },
        { text: "Vue", link: "/childPage/vue" },
        { text: "React", link: "/childPage/react" },
      ],
    },
  ],
  "/mdFile/htmlCss/": [
    {
      text: "HTMLCss",
      items: [
        { text: "环境配置", link: "/mdFile/htmlCss/01 环境配置" },
        { text: "网站和网页", link: "/mdFile/htmlCss/02 网站和网页" },
        { text: "浏览器和浏览器内核", link: "/mdFile/htmlCss/04 邂逅html" },
        { text: "邂逅html", link: "/mdFile/htmlCss/04 邂逅html" },
        {
          text: "HTML结构、元素、类型",
          link: "/mdFile/htmlCss/05 HTML结构、元素、类型",
        },
        { text: "HTML高级元素", link: "/mdFile/htmlCss/06 HTML高级元素" },
        { text: "HTML补充", link: "/mdFile/htmlCss/07 HTML补充" },
        { text: "邂逅Css", link: "/mdFile/htmlCss/08 邂逅Css" },
        { text: "编写Css样式", link: "/mdFile/htmlCss/09 编写Css样式" },
        { text: "Css常用属性", link: "/mdFile/htmlCss/10 Css常用属性" },
        { text: "Css字体", link: "/mdFile/htmlCss/11 Css字体" },
        { text: "Css文本", link: "/mdFile/htmlCss/12 Css文本" },
        { text: "Css选择器", link: "/mdFile/htmlCss/13 Css选择器" },
        { text: "Css盒子模型", link: "/mdFile/htmlCss/14 Css盒子模型" },
        {
          text: "Css属性的继承与层叠",
          link: "/mdFile/htmlCss/15 Css属性的继承与层叠",
        },
        { text: "Css元素的隐藏", link: "/mdFile/htmlCss/16 Css元素的隐藏" },
        { text: "Css设置背景", link: "/mdFile/htmlCss/17 Css设置背景" },
        { text: "Css元素定位", link: "/mdFile/htmlCss/18 Css元素定位" },
        { text: "Css元素浮动", link: "/mdFile/htmlCss/19 Css元素浮动" },
        { text: "flex布局", link: "/mdFile/htmlCss/20 flex布局" },
        {
          text: "tranfrom、animation",
          link: "/mdFile/htmlCss/21 tranfrom、animation",
        },
        {
          text: "vertical-align",
          link: "/mdFile/htmlCss/22 vertical-align",
        },
        { text: "less-sass", link: "/mdFile/htmlCss/23 less-sass" },
        { text: "Css单位、视口", link: "/mdFile/htmlCss/24 Css单位、视口" },
        { text: "Grid布局", link: "/mdFile/htmlCss/25 Grid布局" },
        { text: "Css补充", link: "/mdFile/htmlCss/26 Css补充" },
        {
          text: "Css垂直水平居中",
          link: "/mdFile/htmlCss/27 Css垂直水平居中",
        },
      ],
    },
  ],

  "/mdFile/js-Prim/": [
    {
      text: "JavaScript基础",
      items: [
        {
          text: "编程语言发展历史与JS的诞生",
          link: "/mdFile/js-Prim/01 编程语言发展历史与JS的诞生",
        },
        {
          text: "基础语法",
          link: "/mdFile/js-Prim/02 JavaScript的基础语法",
        },
        {
          text: "变量与数据类型",
          link: "/mdFile/js-Prim/03 JavaScript中的变量与数据类型",
        },
        { text: "运算符", link: "/mdFile/js-Prim/04 JavaScript中的运算符" },
        {
          text: "分支语句",
          link: "/mdFile/js-Prim/05 JavaScript中的分支语句",
        },
        {
          text: "循环语句",
          link: "/mdFile/js-Prim/06 JavaScript中的循环语句",
        },
        { text: "函数", link: "/mdFile/js-Prim/07 JavaScript中的函数" },
        {
          text: "面向对象",
          link: "/mdFile/js-Prim/08 JavaScript中的面向对象",
        },
        {
          text: "内置类(包装类)",
          link: "/mdFile/js-Prim/09 JavaScripy中的内置类(包装类)",
        },
        {
          text: "Dom操作",
          link: "/mdFile/js-Prim/10 JavaScript中的Dom操作",
        },
        {
          text: "事件监听",
          link: "/mdFile/js-Prim/11 JavaScript中的事件监听",
        },
        { text: "Bom", link: "/mdFile/js-Prim/12 JavaScript中的Bom" },
      ],
    },
  ],

  "/mdFile/js-Level/": [
    {
      text: "JavaScript进阶",
      items: [
        {
          text: "this指向",
          link: "/mdFile/js-Level/01 JavaScript中的this指向",
        },
        {
          text: "浏览器渲染原理",
          link: "/mdFile/js-Level/02 浏览器渲染原理",
        },
        {
          text: "执行原理",
          link: "/mdFile/js-Level/03 JavaScript执行原理",
        },
        {
          text: "内存管理和闭包",
          link: "/mdFile/js-Level/04 JavaScript中的内存管理和闭包",
        },
        {
          text: "函数增强",
          link: "/mdFile/js-Level/05 JavaScript中的函数增强",
        },
        {
          text: "面向对象",
          link: "/mdFile/js-Level/06 JavaScript中的面向对象",
        },
        {
          text: "继承",
          link: "/mdFile/js-Level/07 JavaScript中的继承",
        },
        {
          text: "Es6中的继承",
          link: "/mdFile/js-Level/08 Es6中的继承",
        },
        {
          text: "Es6新特性",
          link: "/mdFile/js-Level/09 Es6新特性",
        },
        {
          text: "Es7-Es13新特性",
          link: "/mdFile/js-Level/10 Es7-Es13新特性",
        },
        {
          text: "Promise",
          link: "/mdFile/js-Level/11 Promise",
        },
        {
          text: "Proxy,Reflect",
          link: "/mdFile/js-Level/12 Proxy,Reflect",
        },
        {
          text: "异步处理",
          link: "/mdFile/js-Level/13 异步处理",
        },
        {
          text: "进程和线程",
          link: "/mdFile/js-Level/14 进程和线程",
        },
        {
          text: "异常处理",
          link: "/mdFile/js-Level/15 异常处理",
        },
        {
          text: "正则表达式",
          link: "/mdFile/js-Level/16 正则表达式",
        },
        {
          text: "Storage",
          link: "/mdFile/js-Level/17 Storage",
        },
        {
          text: "防抖节流",
          link: "/mdFile/js-Level/18 防抖节流",
        },
        {
          text: "手写深拷贝",
          link: "/mdFile/js-Level/19 手写深拷贝",
        },
        {
          text: "事件总线",
          link: "/mdFile/js-Level/20 事件总线",
        },
        {
          text: "请求通信",
          link: "/mdFile/js-Level/21 请求通信",
        },
      ],
    },
  ],

  "/mdFile/ftdEng/": [
    {
      text: "前端工程化",
      items: [
        {
          text: "Node.js",
          link: "/mdFile/ftdEng/01 Node.js",
        },
        {
          text: "javaScript模块化开发",
          link: "/mdFile/ftdEng/02 javaScript模块化开发",
        },
        {
          text: "包管理工具",
          link: "/mdFile/ftdEng/03 包管理工具",
        },
        {
          text: "webpack基础",
          link: "/mdFile/ftdEng/04 webpack基础",
        },
        {
          text: "webpack中的loader和plugin",
          link: "/mdFile/ftdEng/05 webpack中的loader和plugin",
        },
        {
          text: "webpack搭建本地服务器",
          link: "/mdFile/ftdEng/06 webpack搭建本地服务器",
        },
        {
          text: "git版本控制工具",
          link: "/mdFile/ftdEng/07 git版本控制工具",
        },
      ],
    },
  ],
  "/mdFile/vue/": [
    {
      text: "Vue",
      items: [
        {
          text: "初识Vue",
          link: "/mdFile/vue/01 初识Vue",
        },
        {
          text: "模板语法",
          link: "/mdFile/vue/02 模板语法",
        },
        {
          text: "Vue的Options Api",
          link: "/mdFile/vue/03 Vue的Options Api",
        },
        {
          text: "v-model绑定",
          link: "/mdFile/vue/04 v-model绑定",
        },
        {
          text: "vue组件化开发基础",
          link: "/mdFile/vue/05 vue组件化开发基础",
        },
        {
          text: "vue组件化组件间通信",
          link: "/mdFile/vue/06 vue组件化组件间通信",
        },
        {
          text: "vue组件化插槽slot",
          link: "/mdFile/vue/07 vue组件化插槽slot",
        },
        {
          text: "vue组件化非父子通信",
          link: "/mdFile/vue/08 vue组件化非父子通信",
        },
        {
          text: "vue的生命周期",
          link: "/mdFile/vue/09 vue的生命周期",
        },
        {
          text: "ref获取组件对象",
          link: "/mdFile/vue/10 ref获取组件对象",
        },
        {
          text: "动态组件",
          link: "/mdFile/vue/11 动态组件",
        },
        {
          text: "代码分包",
          link: "/mdFile/vue/12 代码分包",
        },
        {
          text: "mixin",
          link: "/mdFile/vue/13 mixin",
        },
        {
          text: "Composition API",
          link: "/mdFile/vue/14 Composition API",
        },
        {
          text: "Vue Router",
          link: "/mdFile/vue/15 Vue Router",
        },
        {
          text: "Vuex",
          link: "/mdFile/vue/16 Vuex",
        },
        {
          text: "Pinia",
          link: "/mdFile/vue/17 Pinia",
        },
        {
          text: "TypeScript",
          link: "/mdFile/vue/18 TypeScript",
        },
      ],
    },
  ],
  "/mdFile/react/": [
    {
      text: "React",
      items: [
        {
          text: "为什么要学React",
          link: "/mdFile/react/01 为什么要学React",
        },
        {
          text: "邂逅React开发",
          link: "/mdFile/react/02 邂逅React开发",
        },
        {
          text: "JSX语法",
          link: "/mdFile/react/03 JSX语法",
        },
        {
          text: "React脚手架",
          link: "/mdFile/react/04 React脚手架",
        },
        {
          text: "组件化开发",
          link: "/mdFile/react/05 组件化开发",
        },
        {
          text: "组件化开发进阶",
          link: "/mdFile/react/06 组件化开发进阶",
        },
      ],
    },
  ],
};
