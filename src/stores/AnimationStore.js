import {defineStore} from 'pinia';
export const useAnimationStore = defineStore('animationStore',{
    state: () => ({
         isLoading: false
    }),
    actions: {
        setLoading(value) {
            this.isLoading = value
        }
    }
})