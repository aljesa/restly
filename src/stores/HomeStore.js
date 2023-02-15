import { defineStore } from "pinia";

export const useHomeStore = defineStore('homeStore',{
    state: () => ({
        tasks: [
            {id: 1, title: 'buy some milk', isFav: false},
            {id: 2, title: 'buy some cheese', isFav: true},
        ],
        name: 'Aljesa'
    })
});