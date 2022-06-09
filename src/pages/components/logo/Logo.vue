<!--
 * @Author: yangdongyu
 * @Date: 2022-06-09 11:04:47
 * @LastEditors: yangdongyu
 * @LastEditTime: 2022-06-09 14:26:51
 * @FilePath: /xm-device-update/src/pages/components/logo/Logo.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yangdongyu/小马国炬, All Rights Reserved. 
-->
<template>
  <div class="absolute top-0 bg-dark-50 !h-100px leading-100px pl-10px pr-10px w-full text-center">
    <transition name="fade" mode="out-in">
      <div v-if="!props.isCollapse">
        <img src="../../../assets/images/logo.png" class="w-80px inline-block align-middle mr-15px" alt="" />
        <span class="sys-title text-white text-28px align-middle tracking-wider min-w-0">设备升级管理</span>
      </div>
      <div v-else>
        <img src="../../../assets/images/logo.png" class="w-80px inline-block align-middle mr-15px" alt="" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  isCollapse: Boolean;
};
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to,
.fade-leave-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-to {
  opacity: 1;
}
</style>