import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import look from '@/components/Detail'
import look1 from '@/components/Detail1'
import look2 from '@/components/Detail2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Detail/',
      name: 'Detail',
      component: look,
      children: [
        {
          path: 'Detail1',
          name: 'Detail1',
          component: look1
        },
        {
          path: 'Detail2',
          name: 'Detail2',
          component: look2
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
