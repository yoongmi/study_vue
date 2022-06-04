import HomeView from '../views/basic/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kakaologin',
    name: 'kakaologin',
    component: () => import(/* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
  },{
    path: '/NaverLogin',
    name: 'NaverLogin',
    component: () => import(/* webpackChunkName: "parent" */ '../views/NaverLogin.vue')
  },
  {
    path: '/GoogleLogin',
    name: 'GoogleLogin',
    component: () => import(/* webpackChunkName: "GoogleLogin" */ '../views/GoogleLogin.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "DataBinding" */ '../views/basic/DataBinding.vue')
  },
  {
    path: '/DBhtml',
    name: 'DBhtml',
    component: () => import(/* webpackChunkName: "DBHtml" */ '../views/basic/DBHtml.vue')
  },
  {
    path: '/DBinputtext',
    name: 'DBinputtext',
    component: () => import(/* webpackChunkName: "DBinputtext" */ '../views/basic/DBInputText.vue')
  },
  {
    path: '/DBinputnum',
    name: 'DBinputnum',
    component: () => import(/* webpackChunkName: "DBInputNumber" */ '../views/basic/DBInputNumber.vue')
  },
  {
    path: '/DBtextarea',
    name: 'DBtextarea',
    component: () => import(/* webpackChunkName: "DBTextarea" */ '../views/basic/DBTextarea.vue')
  },
  {
    path: '/DBselect',
    name: 'DBselect',
    component: () => import(/* webpackChunkName: "DBselect" */ '../views/basic/DBselect.vue')
  },
  {
    path: '/DBcheckbox',
    name: 'DBcheckbox',
    component: () => import(/* webpackChunkName: "DBcheckbox" */ '../views/basic/DBcheckbox.vue')
  },
  {
    path: '/DBradio',
    name: 'DBradio',
    component: () => import(/* webpackChunkName: "DBradio" */ '../views/basic/DBradio.vue')
  },
  {
    path: '/DBattribue',
    name: 'DBattribue',
    component: () => import(/* webpackChunkName: "DBattribue" */ '../views/basic/DBattribue.vue')
  },
  {
    path: '/DBbutton',
    name: 'DBbutton',
    component: () => import(/* webpackChunkName: "DBbutton" */ '../views/basic/DBbutton.vue')
  },
  {
    path: '/DBclass',
    name: 'DBclass',
    component: () => import(/* webpackChunkName: "DBclass" */ '../views/basic/DBclass.vue')
  },
  {
    path: '/DBstyle',
    name: 'DBstyle',
    component: () => import(/* webpackChunkName: "DBstyle" */ '../views/basic/DBstyle.vue')
  },
  {
    path: '/DBlist',
    name: 'DBlist',
    component: () => import(/* webpackChunkName: "DBlist" */ '../views/basic/DBlist.vue')
  },
  {
    path: '/RenderingVif',
    name: 'RenderingVif',
    component: () => import(/* webpackChunkName: "RenderingVif" */ '../views/basic/RenderingVif.vue')
  },
  {
    path: '/RenderingVshow',
    name: 'RenderingVshow',
    component: () => import(/* webpackChunkName: "RenderingVshow" */ '../views/basic/RenderingVshow.vue')
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: () => import(/* webpackChunkName: "EventClick" */ '../views/basic/EventClick.vue')
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: () => import(/* webpackChunkName: "EventChange" */ '../views/basic/EventChange.vue')
  },
  {
    path: '/EventKeyup',
    name: 'EventKeyup',
    component: () => import(/* webpackChunkName: "EventKeyup" */ '../views/basic/EventKeyup.vue')
  },
  {
    path: '/ComputedTest',
    name: 'ComputedTest',
    component: () => import(/* webpackChunkName: "ComputedTest" */ '../views/basic/ComputedTest.vue')
  },
  {
    path: '/WatchTest',
    name: 'WatchTest',
    component: () => import(/* webpackChunkName: "WatchTest" */ '../views/basic/WatchTest.vue')
  },
  {
    path: '/DBlistMoc',
    name: 'DBlistMoc',
    component: () => import(/* webpackChunkName: "DBlist2" */ '../views/basic/DBlist2.vue')
  },
  {
    path: '/NestComp',
    name: 'NestComp',
    component: () => import(/* webpackChunkName: "NestedCompo" */ '../views/deepen/NestedCompo.vue')
  },
  {
    path: '/ParentComp',
    name: 'ParentComp',
    component: () => import(/* webpackChunkName: "ParentComponent" */ '../views/deepen/ParentComponent.vue')
  },
  {
    path: '/ParentComp2',
    name: 'ParentComp2',
    component: () => import(/* webpackChunkName: "ParentComponent2" */ '../views/deepen/ParentComponent2.vue')
  },
  {
    path: '/ParentComp3',
    name: 'ParentComp3',
    component: () => import(/* webpackChunkName: "ParentComponent3" */ '../views/deepen/ParentComponent3.vue')
  },
  {
    path: '/ParentComp4',
    name: 'ParentComp4',
    component: () => import(/* webpackChunkName: "ParentComponent4" */ '../views/deepen/ParentComponent4.vue')
  },
  {
    path: '/ParentComp5',
    name: 'ParentComp5',
    component: () => import(/* webpackChunkName: "ParentComponent5" */ '../views/deepen/ParentComponent5.vue')
  },
  {
    path: '/SlotModalLayout',
    name: 'SlotModalLayout',
    component: () => import(/* webpackChunkName: "SlotUseModalLayout" */ '../views/deepen/SlotUseModalLayout.vue')
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "ProvideInject" */ '../views/deepen/ProvideInject.vue')
  },
  {
    path: '/ComposiTion',
    name: 'ComposiTion',
    component: () => import(/* webpackChunkName: "CompositionAPI" */ '../views/composition/CompositionAPI.vue')
  },
  {
    path: '/ComposiTion2',
    name: 'ComposiTion2',
    component: () => import(/* webpackChunkName: "CompositionAPI2" */ '../views/composition/CompositionAPI2.vue')
  },
  {
    path: '/ComposiTion3',
    name: 'ComposiTion3',
    component: () => import(/* webpackChunkName: "CompositionAPI3" */ '../views/composition/CompositionAPI3.vue')
  },
  {
    path: '/ComposiTion4',
    name: 'ComposiTion4',
    component: () => import(/* webpackChunkName: "CompositionAPI4" */ '../views/composition/CompositionAPI4.vue')
  },
  {
    path: '/APIProvide',
    name: 'APIProvide',
    component: () => import(/* webpackChunkName: "APIProvide" */ '../views/composition/APIProvide.vue')
  },
  {
    path: '/MixinSin',
    name: 'MixinSin',
    component: () => import(/* webpackChunkName: "MixinSin" */ '../views/composition/MixinSin.vue')
  },
  {
    path: '/PlugIns',
    name: 'PlugIns',
    component: () => import(/* webpackChunkName: "PlugIns" */ '../views/composition/PlugIns.vue')
  },
  {
    path: '/StoreAccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "PlugIns" */ '../views/StoreAccess.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
