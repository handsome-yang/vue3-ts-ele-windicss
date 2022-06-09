/*
 * @Author: yangdongyu
 * @Date: 2022-06-08 23:11:30
 * @LastEditors: yangdongyu
 * @LastEditTime: 2022-06-08 23:12:38
 * @FilePath: /xm-device-update/src/plugins/ele-icons.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by yangdongyu/小马国炬, All Rights Reserved. 
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export const setEleIcons = (app:any) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}