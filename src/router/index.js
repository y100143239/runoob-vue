import Vue from 'vue'
import Router from 'vue-router'
import A01Template from '@/components/A01Template'
import A02If from '@/components/A02If'
import A03For from '@/components/A03For'
import A04Computed from '@/components/A04Computed'
import A05Watch from '@/components/A05Watch'
import A06StyleBind from '@/components/A06StyleBind'
import A07On from '@/components/A07On'
import A08Model from '@/components/A08Model'
import A09Component from '@/components/A09Component'
import A10Command from '@/components/A10Command'
import A11Router from '@/components/A11Router'
import A12Transition from '@/components/A12Transition'
import A13Mixins from '@/components/A13Mixins'
import A14Ajax from '@/components/A14Ajax'
import A15React from '@/components/A15React'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: A01Template
    }, {
      path: '/A01Template',
      component: A01Template
    }, {
      path: '/A02If',
      component: A02If
    }, {
      path: '/A03For',
      component: A03For
    }, {
      path: '/A04Computed',
      component: A04Computed
    }, {
      path: '/A05Watch',
      component: A05Watch
    }, {
      path: '/A06StyleBind',
      component: A06StyleBind
    }, {
      path: '/A07On',
      component: A07On
    }, {
      path: '/A08Model',
      component: A08Model
    }, {
      path: '/A09Component',
      component: A09Component
    }, {
      path: '/A10Command',
      component: A10Command
    }, {
      path: '/A11Router',
      component: A11Router
    }, {
      path: '/A12Transition',
      component: A12Transition
    }, {
      path: '/A13Mixins',
      component: A13Mixins
    }, {
      path: '/A14Ajax',
      component: A14Ajax
    }, {
      path: '/A15React',
      component: A15React
    }
  ]
})
