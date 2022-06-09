/*
 * @Author: yangdongyu
 * @Date: 2022-06-06 11:32:41
 * @LastEditors: yangdongyu
 * @LastEditTime: 2022-06-09 14:30:36
 * @FilePath: /xm-device-update/src/main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by yangdongyu/小马国炬, All Rights Reserved. 
 */
import { createApp } from 'vue'
import App from './App.vue'

import { setFlexible } from "./plugins"
import { setEleIcons } from "./plugins"
import { setStore } from "./store"
import { setRouter } from "./router"
import 'virtual:windi.css'
import './styles/index.scss'

const app = createApp(App)

setFlexible()
// setEleIcons(app)
setStore(app)
setRouter(app)
app.mount('#app')
