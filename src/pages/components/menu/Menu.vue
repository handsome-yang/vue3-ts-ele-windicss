<!--
 * @Author: yangdongyu
 * @Date: 2022-06-06 11:39:10
 * @LastEditors: yangdongyu
 * @LastEditTime: 2022-06-09 13:23:02
 * @FilePath: /xm-device-update/src/pages/components/menu/Menu.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yangdongyu/小马国炬, All Rights Reserved. 
-->
<template>
  <template v-for="(menu, mi) in props.menulist" :key="menu.path">
    <!-- 有子元素 -->
    <template v-if="menu.children && menu.children.length > 0">
      <el-sub-menu :index="mi">
       <el-icon :size="24" class="!w-50px !h-full !mr-15px">
        <Icon :icon="menu.icon"/>
      </el-icon> 
        <span class="text-2xl ">{{ menu.name }}</span>
        <Menu :menulist="menu.children"></Menu>
      </el-sub-menu>
    </template>

    <!-- 无子元素 -->
    <template v-else class="flex">
      <el-menu-item :index="menu.path">
       <el-icon :size="24" class="!w-50px !h-full !mr-15px">
        <Icon :icon="menu.icon"/>
      </el-icon> 
        <span class="text-2xl">{{ menu.name }}</span>
      </el-menu-item>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
type Props = {
  menulist: Array<Object>;
};
const props = defineProps<Props>();
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
