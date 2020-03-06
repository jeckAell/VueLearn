<template>
  <div>
    <p>只实现getter原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <br/>
    <p>getter和setter同时实现,默认嗲用getter:{{getAndSetDemo}}</p>
    <button @click="setValue()">点击修改按钮</button>
  </div>
</template>

<script>
export default {
  name: 'ComputedDemo',
  data () {
    return {
      message: '我是原字符串'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    getAndSetDemo: {
      get: function () {
        return '我是get'
      },
      set: function (newValues) {
        console.log('当前set是，正在被修改，message is ' + this.message)
        this.message = 'set成功'
      }
    }
  },
  methods: {
    setValue: function () {
      // 调用setter方法
      this.getAndSetDemo = 'aa'
    }
  }
}
</script>
