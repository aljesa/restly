import { defineStore } from "pinia";

export const useNewsStore = defineStore('newsStore',{
    state: () => ({
        news: [
            {id: 1, title: 'Top 5 Emerging Trends in the Software Development Industry', imgSrc: 'src/assets/images/news/software-development.jpeg', description: 'As the world becomes increasingly digital, the software development industry is experiencing rapid growth and evolution.', user: 'Admin', date:'22.12.2021' },
            {id: 2, title: 'Our Company Wins Award for Innovation in Software Development', imgSrc: 'src/assets/images/news/won-award.jpeg', description: 'We are proud to announce that our company has been recognized for our innovation in software development. ', user: 'Admin', date:'22.12.2021' },
            {id: 3, title: 'Introducing our latest product update: X version 2.0', imgSrc: 'src/assets/images/news/product-update.jpeg', description: 'We are excited to announce the release of X version 2.0 - our latest product update that brings a host of new features and improvements to our software.', user: 'Admin', date:'22.12.2021' },

        ],
    })
});