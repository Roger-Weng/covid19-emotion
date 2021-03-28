import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import emoStatus from '@/components/keeper/emoStatus'
import daily_report from '@/components/keeper/daily_report'
import login from '@/components/login'
import signUp from '@/components/signup'
import calendar from '@/components/keeper/calendar'
import emoInput from '@/components/keeper/emoInput'
import weekly_report from '@/components/keeper/weekly_report'
import introduction from '@/components/introduction'
import medical_resources from "@/components/keeper/medical_resources"
import forum from '@/components/keeper/forum'
import topic from '@/components/keeper/topic';



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'',
      redirect:'/introduction',
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/keeper_emoStatus',
      name: 'emoStatus',
      component: emoStatus
    },
    {
      path: '/keeper/emoInput',
      name: 'emoInput',
      component: emoInput
    },
    {
      path: '/keeper/daily_report',
      name: 'daily_report',
      component: daily_report
    },
    {
      path:'/keeper/calendar',
      name:'calendar',
      component: calendar
    },
    {
      path:'/keeper/weekly_report',
      name:'weekly_report',
      component: weekly_report
    },
    {
      path:'/keeper/medical_resources',
      name:'medical_resources',
      component: medical_resources
    },
    {
      path: '/keeper/forum',
      name: 'forum',
      component: forum
    },
    {
      path: '/keeper/topic/:t',
      name: 'topic',
      component: topic
    },
   
  ]
})
