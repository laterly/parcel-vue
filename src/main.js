import Vue from 'vue'
import App from './App'
import router from './router'

/*公共js*/
import './libs/base.js'

const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
