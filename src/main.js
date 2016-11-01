import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/routers/Home'
import Lab from './components/routers/Lab'
import About from './components/routers/About'
import Comment from './components/routers/Comment'
import Post from './components/routers/page/Post'
import New from './components/routers/New'

Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/lab', component: Lab },
    { path: '/about', component: About },
    { path: '/comment', component: Comment },
    { path: '/post/:_id', name: 'post', component: Post },
    { path: '/new', component: New },
    { path: '/', redirect: '/home' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App}
})

/**
 * 路由配置
 */
// router.map({
//   '/home': {
//     component: Home
//   },
//   '/lab': {
//     component: Lab
//   },
//   '/about': {
//     component: About
//   },
//   '/comment': {
//     component: Comment
//   },
//   '/post/:_id': {
//     name: 'post',
//     component: Post
//   },
//   '/new': {
//     component: New
//   }
// })

// 设置默认情况下打开的页面
// router.redirect({
//   '/': '/home'
// // })

// router.start(App, 'app')
