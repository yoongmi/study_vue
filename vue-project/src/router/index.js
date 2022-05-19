import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DBhtml from '../views/DBHtml.vue'
import DBinputtext from '../views/DBInputText.vue'
import DBinputnum from '../views/DBInputNumber.vue'
import DBtextarea from '../views/DBTextarea.vue'
import DBselect from '../views/DBselect.vue'
import DBcheckbox from '../views/DBcheckbox.vue'
import DBradio from '../views/DBradio.vue'
import DBattribue from '../views/DBattribue.vue'
import DBbutton from '../views/DBbutton.vue'
import DBclass from '../views/DBclass.vue'
import DBstyle from '../views/DBstyle.vue'
import DBlists from '../views/DBlist.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/DBhtml',
    name: 'DBhtml',
    component: DBhtml
  },
  {
    path: '/DBinputtext',
    name: 'DBinputtext',
    component: DBinputtext
  },
  {
    path: '/DBinputnum',
    name: 'DBinputnum',
    component: DBinputnum
  },
  {
    path: '/DBtextarea',
    name: 'DBtextarea',
    component: DBtextarea
  },
  {
    path: '/DBselect',
    name: 'DBselect',
    component: DBselect
  },
  {
    path: '/DBcheckbox',
    name: 'DBcheckbox',
    component: DBcheckbox
  },
  {
    path: '/DBradio',
    name: 'DBradio',
    component: DBradio
  },
  {
    path: '/DBattribue',
    name: 'DBattribue',
    component: DBattribue
  },
  {
    path: '/DBbutton',
    name: 'DBbutton',
    component: DBbutton
  },
  {
    path: '/DBclass',
    name: 'DBclass',
    component: DBclass
  },
  {
    path: '/DBstyle',
    name: 'DBstyle',
    component: DBstyle
  },
  {
    path: '/DBlist',
    name: 'DBlist',
    component: DBlists
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
