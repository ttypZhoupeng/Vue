import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zp from '@/components/zp'
// import User from '@/components/User'
import Hero from '@/views/hero'



Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/zp',
      name: 'zp',
      component: zp
    },
    {
      path:'/hero',
      name:'Hero',
      component:Hero
    }
    // {
    //   path:'/user/:id',
    //   component:User,
    //   children:[{
    //     path:'profile',
    //     component:UserProfile
    //   },
    //   {
    //     path:'posts',
    //     component:UserPosts
    //   }
    // ]
    // }

  ]
})
