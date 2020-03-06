## 6、路由

 路由需要载入 [vue-router 库](https://github.com/vuejs/vue-router)

中文文档地址：[vue-router文档](http://router.vuejs.org/zh-cn/)。

在我们的项目中，使用vue-cli初始化项目的时候，已经载入vue-router。

1.使用路由页面跳转：

**使用<router-link>**

```
<!-- 使用 router-link 组件来导航. -->
<!-- 通过传入 `to` 属性指定链接. -->
<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
<router-link to="/watchdemo">跳转到watchdemo</router-link>

```

2.动态路由分配

在本项目中，路由的分配都在router/index.js中定义。代码示例如下：

```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComputedDemo from '@/components/ComputedDemo'
import WatchDemo from '@/components/WatchDemo'
import VOnDemo from '@/components/VOnDemo' // 引入相关组件

// 导入 Vue 和 VueRouter，
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 访问路径
      name: 'HelloWorld', // 可选项，路由名字
      component: HelloWorld  // 组件名字
    },
    {
      path: '/computeddemo',
      name: 'ComputedDemo',
      component: ComputedDemo
    },
    {
      path: '/watchdemo',
      name: 'WatchDemo',
      component: WatchDemo
    },
    {
      path: '/vondemo',
      name: 'VOnDemo',
      component: VOnDemo
    }
  ]
})
```