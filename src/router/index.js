import Vue from 'vue'
import Router from 'vue-router'
import theme from '../view/theme.vue'
import agreement from '../view/agreement.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'theme',
      component: theme
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    }
  ]
})
