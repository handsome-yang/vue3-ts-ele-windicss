/*
 * @Author: yangdongyu
 * @Date: 2022-06-06 11:32:41
 * @LastEditors: yangdongyu
 * @LastEditTime: 2022-06-09 14:29:04
 * @FilePath: /xm-device-update/src/router/index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by yangdongyu/小马国炬, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from "vue-router";
import { createRouterGuards } from "./guard"
import type { App } from "vue"

const config = {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect:'/version',
            component: () => import("@/pages/Home.vue"),
            children:[
                {
                    path:'version',
                    name:'version',
                    component: () => import("@/pages/version/Index.vue"),
                },
                {
                    path:'supervise',
                    name:'supervise',
                    component: () => import("@/pages/supervise/Index.vue"),
                },
                {
                    path:'videohistory',
                    name:'video-history',
                    component: () => import("@/pages/supervise/VideoHistory.vue"),
                },
                {
                    path:'devicehistory',
                    name:'device-history',
                    component: () => import("@/pages/supervise/DeviceHistory.vue"),
                },
                {
                    path:'devicereal',
                    name:'device-real',
                    component: () => import("@/pages/supervise/DeviceReal.vue"),
                }
            ]
        }
    ]
}

export const setRouter = (app:App) => {
    let router = createRouter(config)
    createRouterGuards(router)
    app.use(router)
}