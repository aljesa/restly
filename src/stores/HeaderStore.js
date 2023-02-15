import { defineStore } from "pinia";

export const useHeaderStore = defineStore('headerStore',{
    state: () => ({
        phone: '548978478',
        email: 'demo@example.com',
        time: '08:00 am - 06:00 pm',
        links: [
            {
                id: 1,
                title: 'Home',
                path: '/'
            },
            {
                id: 2,
                title: 'About',
                path: '/about'
            },
            {
                id: 3,
                title: 'Services',
                path: '/services'
            },
            {
                id: 4,
                title: 'Contact',
                path: 'Contact'
            }
        ],
        isScrolled: false,
    })
});