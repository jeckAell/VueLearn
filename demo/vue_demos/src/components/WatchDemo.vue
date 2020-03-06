<template>
  <div>
    <p>普通的watch监听,</p>
    <input type="text" v-model="name"/>
    <p>{{name}}</p>
    <br/>
    <p>deep深度的watch监听,</p>
    <input type="text" v-model="car.name"/>
    <p>{{car.name}} price is {{car.price}}</p>
    <br/>
    <p>immediate首次绑定</p>
    <p>{{age}}</p>

    <br/>
    <ShowButton fatherName="name" @childMsg = "childEvent"/>
    <ShowButton :fatherName="name" />
  </div>
</template>

<script>
import ShowButton from './ShowButton'
export default {
  name: 'WatchDemo',
  components: {
    ShowButton
  },
  data () {
    return {
      name: 'leitao',
      car: {
        name: '长安',
        price: 100
      },
      age: 18
    }
  },
  watch: {
    // 普通的watch监听,watch的其他参数都使用默认值
    name (newValue, oldValue) {
      console.log('oldValue is : ' + oldValue)
      console.log('name被修改')
      console.log('newValue is : ' + newValue)
    },
    car: {
      handler (newValue, oldValue) {
        console.log('oldValue is : ' + oldValue.name)
        console.log('car.name被修改')
        console.log('newValue is : ' + newValue.name)
      },
      deep: true
    },
    age: {
      handler () {
        console.log('首次加载执行监听事件')
      },
      immediate: true
    }
  },
  methods: {
    childEvent: function (childValue) {
      console.log('子组件的值: ' + childValue)
    }
  }
}
</script>
