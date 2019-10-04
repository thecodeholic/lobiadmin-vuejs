import Vue from 'vue'
import Router from 'vue-router'
import auth from './../core/services/auth.service'
import DefaultLayout from "./../core/components/layout/DefaultLayout/DefaultLayout";
import AuthLayout from "./../core/components/layout/AuthLayout/AuthLayout";
import NotFoundComponent from "./../core/components/pages/NotFoundComponent";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      redirect: '/login',
      component: AuthLayout,
      children: []
    },
    {
      path: '/',
      redirect: '/dashboard',
      component: DefaultLayout,
      children: []
    },
    {
      path: '*',
      component: NotFoundComponent,
      children: []
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({path: '/login'})
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.guest) && auth.loggedIn()) {
//     next({path: '/'})
//   } else {
//     next() // make sure to always call next()!
//   }
// });

export default router;
