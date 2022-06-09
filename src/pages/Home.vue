<!--
 * @Author: yangdongyu
 * @Date: 2022-06-06 11:32:41
 * @LastEditors: yangdongyu
 * @LastEditTime: 2022-06-09 14:08:09
 * @FilePath: /xm-device-update/src/pages/Home.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yangdongyu/小马国炬, All Rights Reserved. 
-->
<template>
  <div class="w-full h-full">
    <el-container class="h-full w-full">
      <el-aside class="bg-dark-50 pt-100px !w-auto relative">
        <Logo :isCollapse="isCollapse"  />
        <el-menu :default-active="selectMenu" class="el-menu-vertical-demo !border-none !min-w-100px !max-w-300px !h-full" :collapse="isCollapse" background-color="rgba(74, 74, 74,1)" active-text-color="#ffd04b" text-color="#fff" :router="true" @open="handleOpen" @close="handleClose" @select="handleSelect">
          <Menu :menulist="menulist"></Menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="!h-100px !p-0 flex items-center">
          <i-line-md-menu-fold-left v-show="!isCollapse" @click="isCollapse = !isCollapse" class="w-45px h-45px fill-black float-left ml-20px"></i-line-md-menu-fold-left>
          <i-line-md-menu-fold-right v-show="isCollapse" @click="isCollapse = !isCollapse" class="w-45px h-45px fill-black float-left ml-20px"></i-line-md-menu-fold-right>
        </el-header>
        <el-main class="bg-cyan-400">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "../store/modules/user";
import { useRoute } from "vue-router";
import Menu from "./components/menu/Menu.vue";
import Logo from "./components/logo/Logo.vue";
export default defineComponent({
  components: {
    Menu,
    Logo
  },
  setup() {
    const store = useUserStore();
    const route = useRoute();
    const selectMenu = route.path;
    store.setUserInfo({ hello: "123" });
    const isCollapse = ref(false);
    console.log(selectMenu);

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleSelect = () => {};
    return {
      menulist: [
        {
          path: "/version",
          icon: "system-uicons:version",
          name: "版本管理",
        },
        {
          path: "/supervise",
          icon: "arcticons:simple-system-monitor",
          name: "设备监管",
        },
      ],
      handleOpen,
      handleClose,
      handleSelect,
      selectMenu,
      isCollapse,
    };
  },
});
</script>

<style lang="scss">
.sys-title {
  font-family: ShangShouZongYiTi;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
</style>