import { defineStore } from "pinia";

export const useHomeStore = defineStore('homeStore',{
    state: () => ({
        clients: [
            {id: 1, title: 'Microsoft', imgSrc: 'src/assets/images/clients/microsoft.png', url: 'https://www.microsoft.com/'},
            {id: 2, title: 'Walmart', imgSrc: 'src/assets/images/clients/walmart.png', url:'https://www.walmart.com/'},
            {id: 3, title: 'AirBnb', imgSrc: 'src/assets/images/clients/airbnb.png', url: 'https://www.airbnb.ie/'},
            {id: 4, title: 'Hubspot', imgSrc: 'src/assets/images/clients/hubspot.png', url:'https://www.hubspot.com/products/crm'},
            {id: 5, title: 'Google', imgSrc: 'src/assets/images/clients/google.png', url: 'https://www.google.com/'},
            {id: 6, title: 'Microsoft', imgSrc: 'src/assets/images/clients/microsoft.png', url: 'https://www.microsoft.com/'},
            {id: 7, title: 'Walmart', imgSrc: 'src/assets/images/clients/walmart.png', url:'https://www.walmart.com/'},
            {id: 8, title: 'AirBnb', imgSrc: 'src/assets/images/clients/airbnb.png', url: 'https://www.airbnb.ie/'},
            {id: 9, title: 'Hubspot', imgSrc: 'src/assets/images/clients/hubspot.png', url:'https://www.hubspot.com/products/crm'},
            {id: 10, title: 'Google', imgSrc: 'src/assets/images/clients/google.png', url: 'https://www.google.com/'},
        ],
        progressItems: [
            {id: 1, step: '01', title: 'Advertising and Marketing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore', imgSrc: 'src/assets/images/bubble-chat.png', url: 'https://www.microsoft.com/'},
            {id: 2, step: '01', title: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore', imgSrc: 'src/assets/images/coding.png', url: 'https://www.microsoft.com/'},
            {id: 3, step: '01', title: 'Mobile App Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore', imgSrc: 'src/assets/images/app-development.png', url: 'https://www.microsoft.com/'},

        ],
        teamMembers: [
            {id: 1, name: 'Rodney J. Sabo', position: 'Design Lead', image: 'src/assets/images/team/team-1.jpg', profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'},
            {id: 2, name: 'Ebony K. Hedrick', position: 'Design Lead', image: 'src/assets/images/team/team-2.jpg', profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'},
            {id: 3, name: 'Craig B. Hoffman', position: 'Design Lead', image: 'src/assets/images/team/team-3.jpg', profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'},
            {id: 4, name: 'Jeff R. Rodriguez', position: 'Design Lead', image: 'src/assets/images/team/team-4.jpg', profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'},

        ]
        
    })
});