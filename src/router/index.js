import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Content',
    component: Content
  },
  {
    path: '/teams',
    name: 'Teams',

    component: () => import('../components/ListTeams.vue')
},
{
  path: '/teams/:teamId',
  name: 'TeamDetails',

  component: () => import('../components/TeamDetails.vue')
},
]

const router = new VueRouter({
  routes
})

export default router
