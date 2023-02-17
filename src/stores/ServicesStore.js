import { defineStore } from 'pinia';

export const useServicesStore = defineStore('servicesStore',{
    state: () => ({
        services:{
            items:[
                {
                    id:1,
                    title:'IT Management',
                    imgSrc:'src/assets/images/services/web-dev.jpeg',
                    category:'Web Development',
                    icon:'',
                    url:'',
                    description: 'Welcome to our IT Management Services! We understand that managing an IT department can be a daunting task, especially for small to medium-sized businesses that don\'t have the resources to hire a full-time IT staff. That\'s where we come in. Our IT Management Services are designed to help you focus on your core business while we take care of your IT needs. <br><br> Our team of experienced IT professionals is dedicated to providing top-notch management services that ensure your technology infrastructure is running smoothly and efficiently. We offer a range of IT management services, including:',
                    subServices: [
                        {
                            id: 1,
                            title: 'Network and Systems Management',
                            description: 'We will help you manage your network and systems to ensure that they are running at peak performance. Our team will monitor your systems and provide support to keep them up and running.',
                        },
                        {
                            id: 2,
                            title: 'Security Management',
                            description: 'We understand the importance of keeping your data secure. Our IT Management Services include security management to ensure that your systems are protected from cyber threats and other security risks.',
                        },
                        {
                            id: 3,
                            title: 'Data Management',
                            description: 'Our team will help you manage your data, ensuring that it is backed up and accessible when you need it. We will also help you develop a disaster recovery plan to ensure that your data is safe in case of a disaster.',
                        },
                        {
                            id: 4,
                            title: 'IT Infrastructure Management',
                            description: 'Our IT infrastructure management services cover everything from hardware to software. We will help you manage your IT infrastructure to ensure that it is running efficiently and effectively.',
                        },
                        {
                            id: 5,
                            title: 'IT Consulting',
                            description: 'Our IT consultants are available to provide expert advice and guidance on your IT strategy. We will work with you to identify your needs and develop a customized IT strategy that aligns with your business goals.',
                        }
                    ]
                },
                {
                    id:2,
                    title:'Cloud Services',
                    imgSrc:'src/assets/images/services/data-analytics.jpeg',
                    category:'Data Analytics',
                    icon:'',
                    url:'',
                    description: 'Welcome to our Cloud Services! We understand that in today\'s fast-paced digital world, businesses need reliable and flexible technology solutions that can adapt to their changing needs. Our Cloud Services are designed to help you achieve just that. Our cloud services are backed by industry-leading technology and infrastructure, providing you with the scalability, flexibility, and security that you need to grow your business.',
                    subServices: [
                        {
                            id: 1,
                            title: 'Cloud Infrastructure',
                            description: 'Our Cloud Infrastructure services provide businesses with the ability to rapidly provision and scale their computing resources, including storage, processing power, and memory, to meet their specific needs. We can help you migrate your existing workloads to the cloud, and provide you with the support you need to manage your cloud infrastructure effectively.',
                        },
                        {
                            id: 2,
                            title: 'Cloud Hosting',
                            description: 'Our Cloud Hosting services provide businesses with a scalable, reliable, and cost-effective hosting solution for their website or application. Our cloud hosting solutions can help you reduce costs while providing you with the flexibility and agility that you need to respond to changing business requirements.',
                        },
                        {
                            id: 3,
                            title: 'Cloud Backup and Recovery',
                            description: 'Our Cloud Backup and Recovery services provide businesses with secure and reliable backup and disaster recovery solutions. We can help you design and implement a comprehensive data backup and recovery plan that ensures your data is safe and accessible, no matter what happens.',
                        },
                        {
                            id: 4,
                            title: 'Cloud Security',
                            description: 'Our Cloud Security services provide businesses with the peace of mind that their data is protected from cyber threats and other security risks. We use industry-leading security technologies and protocols to ensure the confidentiality, integrity, and availability of your data.',
                        },
                        
                    ]                
                },
                {
                    id:3,
                    title:'Machine Learning',
                    imgSrc:'src/assets/images/services/mobile-developers.jpeg',
                    category:'Mobile Development',
                    icon:'',
                    url:'',
                    description: 'Welcome to our Machine Learning services page! Machine Learning is a powerful technology that enables computers to learn from data and improve their performance on a task without being explicitly programmed. At Restly, we offer Machine Learning services to help businesses leverage the power of this technology to gain insights, optimize processes, and drive innovation.',
                    subServices: [
                        {
                            id: 1,
                            title: 'Predictive Analytics',
                            description: 'Our predictive analytics solutions use machine learning algorithms to identify patterns and make predictions about future events based on historical data. We can help you develop predictive models for a range of applications, including customer segmentation, fraud detection, and demand forecasting.',
                        },
                        {
                            id: 2,
                            title: 'Natural Language Processing',
                            description: 'Our Natural Language Processing (NLP) services use machine learning algorithms to enable computers to understand and interpret human language. We can help you develop NLP applications for a range of uses, including chatbots, voice assistants, and sentiment analysis.',
                        },
                        {
                            id: 3,
                            title: 'Computer Vision',
                            description: 'Our Computer Vision services use machine learning algorithms to enable computers to interpret and analyze images and video. We can help you develop Computer Vision applications for a range of uses, including facial recognition, object detection, and autonomous driving.',
                        },
                        {
                            id: 4,
                            title: 'Machine Learning Consulting',
                            description: 'Our machine learning consultants can work with you to identify opportunities to leverage machine learning within your business. We can help you develop a machine learning strategy, identify data sources, and determine which machine learning algorithms are best suited for your needs.',
                        },
                    ]
                }
            ],
            categories:[
                {
                    id:1,
                    title:'Data Center'
                },
                {
                    id:2,
                    title:'IT Management'
                },
                {
                    id:3,
                    title:'Software Development'
                },
                {
                    id:4,
                    title:'Web Development'
                },
                {
                    id:5,
                    title:'Cloud Services'
                }
            ]
}
        
    })
});