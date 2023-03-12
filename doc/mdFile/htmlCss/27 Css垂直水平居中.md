## 垂直水平居中

### 绝对定位(atuo自适应)

不需要父元素确定高度和宽度 , 需要子元素存在高度和宽度

- 弊端

  - 必须使用定位、元素脱标

  - 必须给元素设置高度

```css
.子盒子 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto auto;
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

### flex布局

需要父元素存在高度 align-items: center;   justify-content: center;  或者简写place-items: center; 

- 弊端
  - 当前flex布局中所有的元素都会被垂直水平居中
  - 相对来说,兼容性会差一点点

```css
.父盒子 {
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* place-items: center;  简写*/ 
  background-color: green;
}
.父盒子 .子盒子 {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

### Grid布局

需要父元素存在高度 align-items: center;   justify-content: center;  或者简写place-items: center; 

```css
.父盒子 {
  height: 1000px;
  display: grid;
  justify-content: center;
  align-items: center;
  /* place-items: center;  简写*/ 
  background-color: red;
}
.父盒子 .子盒子 {
  width: 100px;.
  height: 100px;
  background-color: green;
}
```

### top+left+translate(推荐)

使用top或left先移动相对于页面50%的距离,然后再使用translate移动相对于自己50%的距离,此时元素中心点居中

需要父盒子存在高度

```css
.父盒子 {
  width: 1000px;
  height: 1000px;
  background-color: aqua;
}

.父盒子 .子盒子 {
  position: relative;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: bisque;
  transform: translate(-50%, -50%);
}
```

### 行内元素 (比较特殊)

垂直居中: 当元素的行高等于父元素时即可居中

水平居中 设置父元素的text-align:center

```css
.父元素 {
  height: 200px;
	text-align: center;
  background-color: red;
}

.子元素 h1 {
	line-height: 200px;
}
```

### 块级元素(只能水平居中) 

设置当前元素（宽度） margin:0 auto

因为默认heigth的高度位auto其实是无限的所以不能居中

```css
.当前元素 {
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 0 auto;
  background-color: green;
}
```

