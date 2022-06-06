<template>
    <div class="test">
        helloWorld
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../store/modules/user";
export default defineComponent({
    setup(){
        const store = useUserStore()
        store.setUserInfo({hello:'123'})
        
        
        return {

        }
    }
})
</script>

<style lang="scss" scoped>
.test{
    font-size: 28px;
}
</style>