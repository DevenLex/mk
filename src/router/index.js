import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/login"
import Footer from "../components/footer"
import Update from "../views/update"
import Mine from "../views/mine"
import Detail from "../views/detail"
import Classify from "../views/classify"
import Ify from '../views/Ify'

Vue.use(VueRouter)

  const routes = [
    // 类别详情页面
    {
      path:'/ify/:url',
      component:Ify,
      props:true
    },
  // 分类页面
  {
    path:"/classify",
    component:Classify
  }, 
  //漫画详情路由
  {
    path:"/detail",
    component:Detail
  }, 
  // 我的页面路由
  {
    path:"/me",
    component:Mine
  },
  // 更新页面路由
  {
    path:"/update",
    component:Update
  },
  {
    path:"/footer",
    component:Footer
  },
  {
    path:"/login",
    component:Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
