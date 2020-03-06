## 9、vuex状态管理

### 9.1.为什么会有vuex

在平时我们使用vue时，在vue中各个组件之间传值的痛苦，所以我们使用vuex来保存我们需要管理的状态值，值一旦被修改，所有引用该值的地方就会自动更新

### 9.2.安装vuex

```
npm i vuex --save
```

### 9.3.怎么使用vuex

1. src目录下新建一个目录store

2. 在该目录下新建一个index.js文件，用来创建vuex实例

3. 在该文件中引入vue和vuex

4. 创建Vuex.Store实例保存到变量store中

5. 最后使用export default导出store

   ```
   import Vue from 'vue'
   import Vuex from 'vuex'
   
   // 使用vuex
   Vue.use(Vuex)
   
   // 创建vuex实例
   const store = new Vuex.Store({
   	// 保存数据
   	state: {
   	}
   })
   
   export default store
   
   ```

   

6. 然后在main.js文件中引入该文件，在文件里面添加 import store from ‘./store’;

7. 再在vue实例全局引入store对象

   ```
   import Vue from 'vue'
   import App from './App'
   import router from './router'
   import axios from 'axios'
   import store from './store'
   
   Vue.prototype.$axios = axios
   Vue.config.productionTip = false
   
   new Vue({
     el: '#app',
     router,
     store,
     components: { App },
     template: '<App/>'
   })
   ```

8. 然后我们就可以开始编写我们的vuex业务代码了

9. 我们的数据如何保存？

   在state中保存数据，如：

   ```
   const store = new Vuex.Store({
   	// 保存数据
   	state: {
   		page: 12
   	}
   })
   ```

10. 怎么取这个值

    在页面中使用this.$store.state.属性名

    ```
    <p>{{this.$store.state.page}}</p>
    ```

### 9.4.其他操作

####  Getters

Getter相当于vue中的computed计算属性，getter  的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getter来获取，Getters  可以用于监听、state中的值的变化，返回计算后的结果。

1.在index.js中定义get方法

```
import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
  // 保存数据
  state: {
    page: 12
  },
  // getter方法
  getters: {
    getStatePage: function (state) {
      return state.page + 1
    }
  }
})

export default store
```

2.在页面的使用

```
<p>{{this.$store.getters.getStatePage}}</p>
```



#### Mutations

修改store中的值唯一的方法是提交mutation来修改

在index.js中添加mutations

```
 mutations: {
    add: function (state) {
      state.page = 55
      console.log(state.page)
    }
  }
```

调用：

在其他组件的methods方法中使用this.$store.commit(mutations中的方法名)

```
a () {
    this.$store.commit('add')
}
```



#### Actions

官方并不建议我们像上面	这样直接去修改store里面的值，而是让我们去提交一个actions，在actions中提交mutation再去修改状态值

在index.js中：

```
actions: {
    addFun (context) {  // 该参数类似于页面中的this.$store
      context.commit('add')
    }
}
```

使用时：

```
a () {
    this.$store.dispatch('addFun')
}
```

当然commit和dispatch方法的参数不止一个，你也可以传2个参数，只不过第一个参数必须是方法名