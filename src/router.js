import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from './view/ListView'
import ImageView from './view/ImageView'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/:type?', component: ListView },
        { path: '/:type/:id/:page?', component: ImageView }
    ]
})
