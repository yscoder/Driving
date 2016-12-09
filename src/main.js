import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueResource)
Vue.use(VueTouch)

export default new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
