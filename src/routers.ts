import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   const { user, token } = store.state
//   const { requiredLogin, redirectAlreadyLogin } = to.meta
//   if (!user.isLogin) {
//     if (token) {
//       axios.defaults.headers.common.Authorization = `Bearer ${token}`
//       store.dispatch('fetchCurrentUser').then(() => {
//         if (redirectAlreadyLogin) {
//           next('/')
//         } else {
//           next()
//         }
//       }).catch(e => {
//         console.error(e)
//         store.commit('logout')
//         next('login')
//       })
//     } else {
//       if (requiredLogin) {
//         next('login')
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (redirectAlreadyLogin) {
//       next('/')
//     } else {
//       next()
//     }
//   }
// })

export default router
