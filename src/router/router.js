import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ServiceDetailView from '../views/ServiceDetailView.vue'
import TeamDetailView from '../views/TeamDetailView.vue'
import NewsView from '../views/NewsView.vue'
import PageNotFound from '../components/errors/PageNotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/services/:id',
      name: 'servicesSingle',
      component: ServiceDetailView
    },
    {
      path: '/team/:id',
      name: 'teamSingle',
      component: TeamDetailView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  
  ]
})

export default router
