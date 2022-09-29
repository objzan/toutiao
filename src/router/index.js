import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/views/Login')
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/Home')
const User = () => import('@/views/User')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/layout',
    redirect: '/layout/home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'user',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
