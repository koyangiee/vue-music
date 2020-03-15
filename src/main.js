import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import Cookie from 'js-cookie'

import { 
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Form,
  Field,
  Popup,
  Toast
} from 'vant'

// fontawesome字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

import App from '@/App.vue'
import '@/assets/icon/iconfont.css'

Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Form)
Vue.use(Field)
Vue.use(Popup)
Vue.use(Toast)

Vue.config.productionTip = false
Vue.prototype.$cookie = Cookie


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
