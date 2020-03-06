<template>
  <div id="ShowButton">
    <button @click="myclick">我要改变</button>
    <br/>
    <p>{{message}}</p>
    <p>父组件的遗产:{{fatherName}}</p>

    <p>贡献给父亲:</p>
    <input type="button" @click="sendMsg" value="子组件值传父组件">

  </div>
</template>

<script>
export default {
  name: 'ShowButton',
  data () {
    return {
      message: '原来的我'
    }
  },
  methods: {
    myclick: function () {
      this.message = '现在的我'
    },
    sendMsg: function () {
      this.$emit('childMsg', ' 子组件值')
    }
  },
  props: ['fatherName']
}
</script>
