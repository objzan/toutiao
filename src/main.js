import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'

import { NavBar, Form, Field, Button } from 'vant'

Vue.config.productionTip = false

Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
