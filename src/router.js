import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from './view/ListView'
import ImageView from './view/ImageView'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/:type?', component: ListView, meta: { scrollEl: '.scroll-load' } },
        { path: '/:type/:id/:page?', component: ImageView }
    ]
})

router.beforeEach((to, from, next) => {
    if (from.meta.scrollEl) {
        from.meta.scrollTop = document.querySelector(from.meta.scrollEl).scrollTop
        console.log(document.querySelector(from.meta.scrollEl).scrollTop)
    }
    next()
})

router.afterEach(route => {
    console.log(111)
    if (route.meta.scrollTop) {
        Vue.nextTick(() => {
            console.log('after', route.meta.scrollTop, document.querySelector(route.meta.scrollEl))
            document.querySelector(route.meta.scrollEl).scrollTop = route.meta.scrollTop
        })
    }
})

export default router
