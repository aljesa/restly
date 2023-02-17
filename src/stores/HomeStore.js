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
            {
                id: 1, 
                name: 'Rodney J. Sabo', 
                position: 'Design Lead', 
                image: 'src/assets/images/team/team-1.jpeg', 
                bio:'Rodney J. Sabo is a Design Lead at Restly. He brings 5 years of experience in UI/UX Design, as well as a passion for design.  At Restly, he is responsible for designing websites, working closely with CEO & Clients to achieve the best result.', 
                education: [
                    {
                        id: 1,
                        degree: 'Bachelor of Science in Computer Science',
                        university: 'Massachusetts Institute of Technology (MIT)',
                        date: '2008-2012'
                    },
                    {
                        id: 2,
                        degree: 'Master of Business Administration (MBA)',
                        university: 'Harvard Business School',
                        date: '2012-2014'
                    },
                    {
                        id: 3,
                        degree: 'AWS Certified Solutions Architect',
                        university: 'Associate, Amazon Web Services',
                        date: '2020'
                    },
                    {
                        id: 4,
                        degree: 'Project Management Professional (PMP)',
                        university: 'Project Management Institute',
                        date: '2019',
                    },
                    {
                        id: 5,
                        degree: 'Certified Scrum Master (CSM)',
                        university: 'Scrum Alliance',
                        date: '2018',
                    }
                ],
                skills: [
                    {
                        id: 1,
                        title: 'Creativity',
                    },
                    {
                        id: 2,
                        title:'Technical skills',
                    },
                    {
                        id: 3,
                        title: 'Communication skills',
                    },
                    {
                        id: 4,
                        title: 'Attention to detail',
                    },
                    {
                        id: 5,
                        title: 'Time management',
                    },
                    {
                        id: 6,
                        title: 'Flexibility'
                    }
                ],
                socialMedia: [
                    {
                        id: 1,
                        title: 'Facebook',
                        socialUrl: 'https://facebook.com',
                        icon: '/src/assets/images/icons/facebook.png',
                    },
                    {
                        id: 2,
                        title: 'LinkedIn',
                        socialUrl: 'https://linkedin.com',
                        icon: '/src/assets/images/icons/linkedin.png',
                    },
                    {
                        id: 3,
                        title: 'Instagram',
                        socialUrl: 'https://instagram.com',
                        icon: '/src/assets/images/icons/instagram.png',
                    },
                    {
                        id: 1,
                        title: 'Twitter',
                        socialUrl: 'https://twitter.com',
                        icon: '/src/assets/images/icons/twitter.png',
                    },
                ]    
            },
            {
                id: 2, 
                name: 'Ebony K. Hedrick', 
                position: 'Design Lead', 
                image: 'src/assets/images/team/team-2.jpeg',
                bio:'Rodney J. Sabo is a Design Lead at Restly. He brings 5 years of experience in UI/UX Design, as well as a passion for design.  At Restly, he is responsible for designing websites, working closely with CEO & Clients to achieve the best result.', 
                education: [
                    {
                        id: 1,
                        degree: 'Bachelor of Science in Computer Science',
                        university: 'Massachusetts Institute of Technology (MIT)',
                        date: '2008-2012'
                    },
                    {
                        id: 2,
                        degree: 'Master of Business Administration (MBA)',
                        university: 'Harvard Business School',
                        date: '2012-2014'
                    },
                    {
                        id: 3,
                        degree: 'AWS Certified Solutions Architect',
                        university: 'Associate, Amazon Web Services',
                        date: '2020'
                    },
                    {
                        id: 4,
                        degree: 'Project Management Professional (PMP)',
                        university: 'Project Management Institute',
                        date: '2019',
                    },
                    {
                        id: 5,
                        degree: 'Certified Scrum Master (CSM)',
                        university: 'Scrum Alliance',
                        date: '2018',
                    }
                ],
                skills: [
                    {
                        id: 1,
                        title: 'Creativity',
                    },
                    {
                        id: 2,
                        title:'Technical skills',
                    },
                    {
                        id: 3,
                        title: 'Communication skills',
                    },
                    {
                        id: 4,
                        title: 'Attention to detail',
                    },
                    {
                        id: 5,
                        title: 'Time management',
                    },
                    {
                        id: 6,
                        title: 'Flexibility'
                    }
                ],
                socialMedia: [
                    {
                        id: 1,
                        title: 'Facebook',
                        socialUrl: 'https://facebook.com',
                        icon: '/src/assets/images/icons/facebook.png',
                    },
                    {
                        id: 2,
                        title: 'LinkedIn',
                        socialUrl: 'https://linkedin.com',
                        icon: '/src/assets/images/icons/linkedin.png',
                    },
                    {
                        id: 3,
                        title: 'Instagram',
                        socialUrl: 'https://instagram.com',
                        icon: '/src/assets/images/icons/instagram.png',
                    },
                    {
                        id: 1,
                        title: 'Twitter',
                        socialUrl: 'https://twitter.com',
                        icon: '/src/assets/images/icons/twitter.png',
                    },
                ]    
            },
            {
                id: 3, 
                name: 'Craig B. Hoffman', 
                position: 'Design Lead', 
                image: 'src/assets/images/team/team-3.jpeg',
                bio:'Rodney J. Sabo is a Design Lead at Restly. He brings 5 years of experience in UI/UX Design, as well as a passion for design.  At Restly, he is responsible for designing websites, working closely with CEO & Clients to achieve the best result.', 
                education: [
                    {
                        id: 1,
                        degree: 'Bachelor of Science in Computer Science',
                        university: 'Massachusetts Institute of Technology (MIT)',
                        date: '2008-2012'
                    },
                    {
                        id: 2,
                        degree: 'Master of Business Administration (MBA)',
                        university: 'Harvard Business School',
                        date: '2012-2014'
                    },
                    {
                        id: 3,
                        degree: 'AWS Certified Solutions Architect',
                        university: 'Associate, Amazon Web Services',
                        date: '2020'
                    },
                    {
                        id: 4,
                        degree: 'Project Management Professional (PMP)',
                        university: 'Project Management Institute',
                        date: '2019',
                    },
                    {
                        id: 5,
                        degree: 'Certified Scrum Master (CSM)',
                        university: 'Scrum Alliance',
                        date: '2018',
                    }
                ],
                skills: [
                    {
                        id: 1,
                        title: 'Creativity',
                    },
                    {
                        id: 2,
                        title:'Technical skills',
                    },
                    {
                        id: 3,
                        title: 'Communication skills',
                    },
                    {
                        id: 4,
                        title: 'Attention to detail',
                    },
                    {
                        id: 5,
                        title: 'Time management',
                    },
                    {
                        id: 6,
                        title: 'Flexibility'
                    }
                ],
                socialMedia: [
                    {
                        id: 1,
                        title: 'Facebook',
                        socialUrl: 'https://facebook.com',
                        icon: '/src/assets/images/icons/facebook.png',
                    },
                    {
                        id: 2,
                        title: 'LinkedIn',
                        socialUrl: 'https://linkedin.com',
                        icon: '/src/assets/images/icons/linkedin.png',
                    },
                    {
                        id: 3,
                        title: 'Instagram',
                        socialUrl: 'https://instagram.com',
                        icon: '/src/assets/images/icons/instagram.png',
                    },
                    {
                        id: 1,
                        title: 'Twitter',
                        socialUrl: 'https://twitter.com',
                        icon: '/src/assets/images/icons/twitter.png',
                    },
                ]    
            },
            {
                id: 4, 
                name: 'Jeff R. Rodriguez', 
                position: 'Design Lead', 
                image: 'src/assets/images/team/team-4.jpeg',
                bio:'Rodney J. Sabo is a Design Lead at Restly. He brings 5 years of experience in UI/UX Design, as well as a passion for design.  At Restly, he is responsible for designing websites, working closely with CEO & Clients to achieve the best result.', 
                education: [
                    {
                        id: 1,
                        degree: 'Bachelor of Science in Computer Science',
                        university: 'Massachusetts Institute of Technology (MIT)',
                        date: '2008-2012'
                    },
                    {
                        id: 2,
                        degree: 'Master of Business Administration (MBA)',
                        university: 'Harvard Business School',
                        date: '2012-2014'
                    },
                    {
                        id: 3,
                        degree: 'AWS Certified Solutions Architect',
                        university: 'Associate, Amazon Web Services',
                        date: '2020'
                    },
                    {
                        id: 4,
                        degree: 'Project Management Professional (PMP)',
                        university: 'Project Management Institute',
                        date: '2019',
                    },
                    {
                        id: 5,
                        degree: 'Certified Scrum Master (CSM)',
                        university: 'Scrum Alliance',
                        date: '2018',
                    }
                ],
                skills: [
                    {
                        id: 1,
                        title: 'Creativity',
                    },
                    {
                        id: 2,
                        title:'Technical skills',
                    },
                    {
                        id: 3,
                        title: 'Communication skills',
                    },
                    {
                        id: 4,
                        title: 'Attention to detail',
                    },
                    {
                        id: 5,
                        title: 'Time management',
                    },
                    {
                        id: 6,
                        title: 'Flexibility'
                    }
                ],
                socialMedia: [
                    {
                        id: 1,
                        title: 'Facebook',
                        socialUrl: 'https://facebook.com',
                        icon: '/src/assets/images/icons/facebook.png',
                    },
                    {
                        id: 2,
                        title: 'LinkedIn',
                        socialUrl: 'https://linkedin.com',
                        icon: '/src/assets/images/icons/linkedin.png',
                    },
                    {
                        id: 3,
                        title: 'Instagram',
                        socialUrl: 'https://instagram.com',
                        icon: '/src/assets/images/icons/instagram.png',
                    },
                    {
                        id: 1,
                        title: 'Twitter',
                        socialUrl: 'https://twitter.com',
                        icon: '/src/assets/images/icons/twitter.png',
                    },
                ]    
            }
        ]
        
    })
});