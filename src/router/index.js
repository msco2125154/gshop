import Vue from 'vue'
import Router from 'vue-router'
import service from '@/views/service'
import center from '@/views/center'
import home from '@/views/home'
import raiders from '@/views/service/raiders'
import punchIn from '@/views/service/punchIn'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import login from '../views/login/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/service/:myid',
      name: 'service',
      component: service,
      props: true,
      children:[
        {
          path:'/raiders',
          name:'raiders',
          component:raiders
        },
        {
          path:'/punchIn',
          name:'punchIn',
          component:punchIn
        }
      ]
    }, 
      {
        path:'/center',
        component:center
      },
      {
        path:'/home',
        component:home
      } ,
      {
        path:'/msite',
        component:Msite,
        meta:{
          showtabbar:true
        }
      } ,
      {
        path:'/order',
        component:Order,
        meta:{
          showtabbar:true
        }
      } ,
      {
        path:'/profile',
        component:Profile,
        meta:{
          showtabbar:true
        }
      } ,
      {
        path:'/search',
        component:Search,
        meta:{
          showtabbar:true
        }
      } ,
      {
        path:'/login',
        component:login
      } ,
      {
        path:'',
        redirect:'/msite'
        } 

  ]
})
