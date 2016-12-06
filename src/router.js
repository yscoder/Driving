import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from './view/ListView'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: ListView },
        { path: '/:list', component: resolve => require(['./view/ListView'], resolve) }
    ]
})
