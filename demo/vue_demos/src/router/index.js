import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComputedDemo from '@/components/ComputedDemo'
import WatchDemo from '@/components/WatchDemo'
import VOnDemo from '@/components/VOnDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
