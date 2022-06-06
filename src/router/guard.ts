
import { Router } from 'vue-router'
// import { getToken } from '../utils/auth'
// import { getLogined } from '@/api'
// import { useUserStore } from '@/store/modules/user'

import { nextTick } from "process";


export function createRouterGuards(router: Router) {
    // const store = useUserStore()

    router.beforeEach((to, from, next) => {
    //     if (!store.userinfo) {
    //         getLogined().then(res => {
    //             if (res.data) {
    //                 store.setUserInfo(res.data)
    //                 sessionStorage.setItem("data", JSON.stringify(res.data))
    //                 next()
    //             }
    //         })
    //     } else {
            next()
    //     }
    })
}