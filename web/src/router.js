import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    { 
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Função que valida se o usuario esta logado,
  // senão redireciona para a pagina de login.
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('access_token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router;