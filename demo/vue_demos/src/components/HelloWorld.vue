<template>
  <div class="hello">
    hello world <br>
    {{msg}}

    <div v-html="html_code"></div>

    <div v-bind:class="{'class1': useRed}">
      动态加载属性值，修改类名, 当useRed为true时,加载class1的样式
    </div>
    <div v-bind:class="{'class1': notuseRed}">
      动态加载属性值，修改类名, 当useRed为true时,加载class1的样式,否则不使用class1的样式
    </div>

    <p>vue支持js的表达式</p>
    {{1+2*4/2}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ tempstr.split('').reverse().join('') }}
    <br>
    <div>部分指令示例</div>
    <div v-text="Vtext"></div>
    <div v-show="true">v-show</div>
    <div v-show="false">v-show</div>
    <div v-for="list in List" v-bind:key="list.age">{{list.name}}</div>
    <div v-for="(v,k, i) in List" v-bind:key="i">{{i}}.{{k}}:{{v}}</div>
    <div v-for="(value,key, i) in tempObj" v-bind:key="i">{{i}}.{{key}}:{{value}}</div>
    <div v-on:click="clickButton" v-text="buttonName"></div>
    <input v-model="inputName">
    <p v-text="{inputName}"></p>

    <div id="app">
      过滤器:{{ tempstr | capitalize }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '文本展示',
      html_code: '<p>插入html代码</p>',
      useRed: true,
      notuseRed: false,
      ok: true,
      tempstr: 'ni hao vue',
      Vtext: 'v-text',
      List: [
        {
          name: 'leitao',
          age: 18
        },
        {
          name: 'leitao2',
          age: 19
        },
        {
          name: 'leitao3',
          age: 20
        }
      ],
      buttonName: '老名字',
      inputName: '输入名字',
      tempObj: {
        name: 'laolei',
        height: 180,
        from: 'ChongQing'
      }
    }
  },
  methods: {
    clickButton: function () {
      this.buttonName = '新名字'
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>
  .class1 {
    color: red;
  }
</style>
