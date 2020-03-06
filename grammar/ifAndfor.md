### 4.3.判断和循环

#### 4.3.1.条件判断

总共就几个命令: v-if | v-else-if | v-else | v-show

其使用逻辑和普通的　if , else if, else　使用是一样的。在其中写入条件表达式 

v-show 和v-if不一样的是, if判断不通过时，页面不回加载其包含的DOM元素，而v-show会加载DOM元素，只是它的属性变成了disable

#### 4.3.2.循环

语法格式：`v-for="item in lists"`  

说明：

> - lists：表示要遍历的数组
> - item：表示数组中的某个元素, 元素也可以是一个json对象
> - 可以用来遍历数组，也可以用来遍历对象
> - 有点类似java的 for(Object a : List )
> - v-for会循环展示该for标签包含的内容。
> - 注意在使用for遍历时，要加上key值，否则控制台会报错

```
<div v-for="list in List" v-bind:key="list.age">{{list.name}}</div>
```

运行结果：

leitao

leitao2

leitao3

- 也可以这样使用：

```
// 遍历数组，index 可选参数，表示索引。value和key可以命名成其他名字
<div v-for="(value,key,index) in List">{{index}}.{{key}}:{{value}}</div>
// value,key和index可以命名成其他名字，可以写成这样
<div v-for="(v,k, i) in List" v-bind:key="i">{{i}}.{{k}}:{{v}}</div>
```

运行结果：

.0:{   "name": "leitao",   "age": 18 }

.1:{   "name": "leitao2",   "age": 19 }

.2:{   "name": "leitao3",   "age": 20 }

```
// 遍历某个对象时
<div v-for="(value,key, i) in tempObj" v-bind:key="i">{{i}}.{{key}}:{{value}}</div>
```

运行结果：

0.name:laolei

1.height:180

2.from:ChongQing

### 