import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
  },
  {
    path: '/card',
    name: 'Card',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/doc-comp/Card.vue')
  },
  {
    path: '/form',
    name: 'Form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/doc-comp/Form.vue')
  },
  {
    path: '/switch-dark',
    name: 'Switch Dark',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../styles/SwitchDark.vue')
  },
  {
    path: '/carousel-text',
    name: 'Carousel Text',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/doc-comp/CarouselText.vue')
  },
  {
    path: '/carousel-photos',
    name: 'Carousel Photos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/doc-comp/CarouselPhotos.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/doc-comp/Grid.vue')
  },
  {
    path: '/bar-title',
    name: 'Bar Titles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/doc-comp/BarTitle.vue')
  },
  {
    path: '/bar-img',
    name: 'Bar with Img',
    component: () => import(/* webpackChunkName: "about" */ '../views/doc-comp/BarDownWithImage.vue')
  },
  {
    path: '/HomeTeste',
    name: 'Home Teste',
    component: () => import('../views/testes-comp/BarImgTitles.vue')
  },
  {
    path: '/vtabs',
    name: 'VTabs',
    component: () => import('../views/doc-comp/VTabs.vue')
  },
  {
    path: '/sendemail',
    name: 'Send Email',
    component: () => import('../views/doc-comp/SendEmail.vue')
  }
  ,
  {
    path: '/3d',
    name: '3D COverflow',
    component: () => import('../views/doc-comp/3DCoverflow.vue')
  }


  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
