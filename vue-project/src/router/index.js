import HomeView from '../views/basic/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DataBinding from '../views/basic/DataBinding.vue'
import DBhtml from '../views/basic/DBHtml.vue'
import DBinputtext from '../views/basic/DBInputText.vue'
import DBinputnum from '../views/basic/DBInputNumber.vue'
import DBtextarea from '../views/basic/DBTextarea.vue'
import DBselect from '../views/basic/DBselect.vue'
import DBcheckbox from '../views/basic/DBcheckbox.vue'
import DBradio from '../views/basic/DBradio.vue'
import DBattribue from '../views/basic/DBattribue.vue'
import DBbutton from '../views/basic/DBbutton.vue'
import DBclass from '../views/basic/DBclass.vue'
import DBstyle from '../views/basic/DBstyle.vue'
import DBlists from '../views/basic/DBlist.vue'
import RenderingVif from '../views/basic/RenderingVif.vue'
import RenderingVshow from '../views/basic/RenderingVshow.vue'
import EventClick from '../views/basic/EventClick.vue'
import EventChange from '../views/basic/EventChange.vue'
import EventKeyup from '../views/basic/EventKeyup.vue'
import ComputedTest from '../views/basic/ComputedTest.vue'
import WatchTest from '../views/basic/WatchTest.vue'
import DBlistMoc from '../views/basic/DBlist2.vue'
import NestComp from '../views/deepen/NestedCompo.vue'
import ParentComp from '../views/deepen/ParentComponent.vue'
import ParentComp2 from '../views/deepen/ParentComponent2.vue'
import ParentComp3 from '../views/deepen/ParentComponent3.vue'
import ParentComp4 from '../views/deepen/ParentComponent4.vue'
import ParentComp5 from '../views/deepen/ParentComponent5.vue'

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
  },
  {
    path: '/RenderingVif',
    name: 'RenderingVif',
    component: RenderingVif
  },
  {
    path: '/RenderingVshow',
    name: 'RenderingVshow',
    component: RenderingVshow
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/EventKeyup',
    name: 'EventKeyup',
    component: EventKeyup
  },
  {
    path: '/ComputedTest',
    name: 'ComputedTest',
    component: ComputedTest
  },
  {
    path: '/WatchTest',
    name: 'WatchTest',
    component: WatchTest
  },
  {
    path: '/DBlistMoc',
    name: 'DBlistMoc',
    component: DBlistMoc
  },
  {
    path: '/NestComp',
    name: 'NestComp',
    component: NestComp
  },
  {
    path: '/ParentComp',
    name: 'ParentComp',
    component: ParentComp
  },
  {
    path: '/ParentComp2',
    name: 'ParentComp2',
    component: ParentComp2
  },
  {
    path: '/ParentComp3',
    name: 'ParentComp3',
    component: ParentComp3
  },
  {
    path: '/ParentComp4',
    name: 'ParentComp4',
    component: ParentComp4
  },
  {
    path: '/ParentComp5',
    name: 'ParentComp5',
    component: ParentComp5
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
