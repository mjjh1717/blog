### MJJH-BLOG

本项目基于 VitePress 开发部署

## 如何运行??

setp 1 

```sh
pnpm install
```

setp 2 (可选) 修改 package.json 启动命令为你自己方便的命令
setp 3 

```sh
pnpm run dev
```

### 以下为本项目的目录结构：

```
.
└─docs 项目主目录
│ index.md 首页
│ htmlCss.md htmlCss 首页
│ js-Prim.md js 基础 首页
│ js-Level.md js 高级 首页
│ ftdEng.md 前端工程化 首页
│ vue.md vue 首页
│ react.md react 首页
│
└─.vitepress 配置文件文件夹
│ config.ts 项目配置文件
├─cache
└─theme 样式文件
│ ├─index.ts 导出
│ └─style.css 样式文件
│
└─mdFile MD 源文件文件夹
│ ├─htmlCss htmlCss 源文件文件夹
│ | ├─img 当前文件夹 md 文章所有的引用图片合集
│ | ├─xxx.md md 源文件
│ ├─js-Prim js 基础 源文件文件夹
│ ├─js-Level js 高级 源文件文件夹
│ ├─ftdEng 前端工程化 源文件文件夹
│ ├─vue vue 源文件文件夹
│ ├─react react 源文件文件夹
│
└─punblic 静态资源文件
└─node_modules 资源引用文件
package.json 项目配置文件
pnpm-lock.yaml 项目依赖文件
readme.md 说明文件
```

