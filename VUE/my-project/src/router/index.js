import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
  import My from '@/components/My'
  import Discover from '@/components/Discover'
  import Sort from '@/components/Sort'
  import Recommend from '@/components/Recommend'
import Search from '@/components/Search'
import Play from '@/components/Play'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/discover',
      children: [
        {
          path: 'my',
          name: 'My',
          component: My
        },
        {
          path: 'discover',
          name: 'Discover',
          component: Discover
        },
        {
          path: 'sort',
          name: 'Sort',
          component: Sort
        },
        {
          path: 'recommend',
          name: 'Recommend',
          component: Recommend
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
