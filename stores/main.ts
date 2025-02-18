import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        data: []
    }),
    actions: {
        setData(newData: any) {
            this.data = newData
        }
    }
})
