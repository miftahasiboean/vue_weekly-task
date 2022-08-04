import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CssView from '../views/CssView.vue'
import javascriptRefreshment from '../views/JavascriptRefreshment.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/css',
        name: 'css',
        component: CssView
    },
    {
        path: '/javascript',
        name: 'javascript',
        component: javascriptRefreshment
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router