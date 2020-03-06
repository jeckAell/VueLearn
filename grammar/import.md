### 4.6.怎么绑定样式

在html中设置元素样式使用一般class和style属性。

- 我们使用v-bind指令来设置样式

```
<div v-bind:class="{ active: isActive }"></div>
```

上面这个代码表示，当isActive为true时，就设置样式为active的样式。

- 同时我们也可以绑定多个样式：

```
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```

这个div绑定了static  active  text-danger三个类的样式。

- 我们也可以使用数组绑定多个样式

  ```
  <div v-bind:class="[activeClass, errorClass]"></div>
  ```

- 可以使用三元表达式来切换列表中的 class ：

  ```
  <div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>
  ```

- 设置内联样式

  ```
  div id="app">
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div>
  </div>
  ```

#### 4.6.1.怎么引入外部.scss、.less、.js等样式文件

  1.引入js

```js
  <script>
      import xxx from '相对路径js文件.js'
  </script>
```

  2.引入scss less css等样式文件

  在sytle中引入

```
  // 引入css
  <style scoped>
  	@import	"相对路径.css"
  </style>
  
  // 引入scss
  <style lang="scss" scoped>
  	@import	"相对路径.scss"
  </style>
```

### 