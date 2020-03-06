<template>
  <div>
    <button v-on:click="onClick">点我</button>
    <router-link to="/watchdemo">跳转到watchdemo</router-link>
  </div>
</template>

<script>
export default {
  name: 'VOnDemo',
  data () {
    return {

    }
  },
  methods: {
    onClick: function () {
      console.log('clicked')
    },
    onEnter: function () {
      console.log('mouseenter')
    },
    onOut: function () {
      console.log('mouseout')
    }
  }
}
</script>
