import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Home from '../components/Home.vue'
import authentication from "../middleware/authentication"
import AccessDenied from '../views/AccessDenied.vue'
import Products from '../views/Products'
import Pitches from '../views/Pitches'

const routes = [
  {
    path: '/', name: 'Home', component: Home,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        return next({ name:'Login' })
      }
      if (localStorage.getItem('token')) {
        return next({ name: 'Profile' })
      }
      next();
    }
  },
  { path: '/products', name: 'Products', component: Products, 
    // meta: { middleware: [authentication]} 
  },
  { path: '/pitches', name: 'Pitches', component: Pitches},
  {
    path: '/login', name: 'Login', component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        return next({
          name: 'Profile'
        })
      }
      next();
    }
  },
  {
    path: '/access-denied', name: 'AccessDenied', component: AccessDenied,
  },
  {
    path: '/profile', name: "Profile", component: Profile,
    // beforeEnter: (to, from, next) => {
    //   if (!localStorage.getItem('token')) {
    //     return next({
    //       name: 'Login'
    //     })
    //   }
    //   next();
    // }
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
