import { defineStore } from "pinia";

export const useFooterStore = defineStore('footerStore',{
    state: () => ({
        quickLinks: [
            {
                id: 1,
                title: 'Home',
                path: '/'
            },
            {
                id: 2,
                title: 'Services',
                path: '/services'
            },
            {
                id: 3,
                title: 'Portfolio',
                path: '/portfolio'
            },
            {
                id: 4,
                title: 'Contact',
                path: 'Contact'
            }
        ],
        socialMedia: [
            {
                id: 1,
                title: 'Facebook',
                path: 'https://facebook.com'
            },
            {
                id: 2,
                title: 'LinkedIn',
                path: 'https://linkedin.com'
            },
            {
                id: 3,
                title: 'Twitter',
                path: 'https://twitter.com'
            },
            {
                id: 4,
                title: 'Instagram',
                path: 'https://instagram.com'
            }
        ],
        openingHours: [
            {
                day: 'Monday-Friday',
                time: '08:00 - 17:00',
            },
            {
                day: 'Saturday - Sunday',
                time: 'Closed',
            },
        ]
    })
});