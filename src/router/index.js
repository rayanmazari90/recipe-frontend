import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeView from '../components/RecipeView.vue'
import RecipesView from '../views/RecipesView.vue'
import BOXView from '../components/CheckBox.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: RecipeView

  },
  {
    path: '/recipe',
    name: 'recipes',
    component: RecipesView
  },
  {
    path: '/recipebox',
    name: 'recipes',
    component: BOXView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Aboutrayane.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
