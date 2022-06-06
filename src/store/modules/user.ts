import { defineStore } from "pinia"

interface userStore {
    userinfo: object | null
}

export const useUserStore = defineStore('user', {
    state: () => <userStore>({
        userinfo: {}
    }),
    actions: {
        setUserInfo(info: any) {
            this.userinfo = info
        }
    }
})