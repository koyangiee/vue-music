import Vue from 'vue'
import VueRouter from 'vue-router'

// 发现
import Detect from '@/views/detect'

// 我的
import My from '@/views/my'
import Song from '@/views/my/song'

import Login from '@/views/login'

Vue.use(VueRouter)

const routes = [
    {
        name: 'detect',
        path: '/detect',
        component: Detect
    },
    {
        name: 'my',
        path: '/my',
        component: My
    },
    {
        name: 'song',
        path: '/song/:id',
        component: Song
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
]


const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if(to.name == 'login' && sessionStorage.getItem !== null){
        next({path: '/my'})
    }else{
        next()
    }
    
})

export default router