/*
 * @Author: yangdongyu
 * @Date: 2022-06-06 13:33:34
 * @LastEditors: yangdongyu
 * @LastEditTime: 2022-06-08 11:13:35
 * @FilePath: /xm-device-update/wind.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by yangdongyu/小马国炬, All Rights Reserved. 
 */
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  darkMode:'class',
  extract:{
    include: ['src/**/*.{vue,html}'],
    exclude: ['node_modules', '.git'],
  },
  theme:{
    extend:{
      fontSize:{
        'xs': '14px',
        'sm': '16px',
        'base': '18px',
        'lg': '20px',
        'xl': '22px',
        '2xl': '24px',
        '3xl': '32px'
      }
    }
  }
})