<template>
    <main>
        <div class="relative h-full w-full pt-10 mb-10 pb-28 bg-no-repeat bg-cover bg-top bg-[url('../assets/images/hero/home-hero-5.jpeg')] before:absolute before:top-0 before:z-20 before:bg-black before:opacity-50 before:h-full before:w-full">
            <div class="container mx-auto px-4 mt-40 text-white z-50 relative">
                <div class="grid grid-cols-2">
                    <div>
                        <span class="text-lg mb-5 inline-block">EMPOWER YOUR BUSINESS</span>
                        <main-heading title="Web & Mobile Apps Development" type="h1" />
                        <main-button title="Meet with us" link="/about" />
                    </div>
                </div>
            </div>
        </div>
        <section class="py-10">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-2 gap-4 mb-10">
                    <div>
                        <span class="text-blue-700 font-medium text-base mb-5 inline-block">It Support For Business</span>
                        <main-heading title="Preparing for your success trusted source in IT services" type="h2" />
                    </div>
                    <div class="mt-10">
                        <main-paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis autem est minus veniam dignissimos eveni</main-paragraph>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <service-card imageSrc="src/assets/images/services/web-dev.jpeg" url="/services:id" title="IT Management" category="Web Development" />
                    <service-card imageSrc="src/assets/images/services/data-analytics.jpeg" url="/services:id" title="Cloud Services" category="Data Analytics" />
                    <service-card imageSrc="src/assets/images/services/mobile-developers.jpeg" url="/services:id" title="Machine Learning" category="Mobile Development" />
                </div>
            </div>
        </section>
        <section class="py-10 mt-40 bg-blue-800 bg-no-repeat z-10 bg-cover bg-center-center bg-[url('../assets/images/progress.png')]">
            <div class="container mx-auto px-4">
                <div class="bg-white relative -mt-20 shadow-2xl py-10 px-20 rounded-md border border-gray-400 border-opacity-10">
                    <swiper :slides-per-view="5" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide v-for="(client, index) in homeStore.clients" :key="index">
                            <a :href="client.url" target="_blank" class="inline-block w-full h-7">
                                <img :src="client.imgSrc" :alt="client.title" class="w-full h-full object-contain">
                            </a>
                        </swiper-slide>
                        <!-- <client-item v-for="(client, index) in homeStore.clients" :key="index" :imageSrc="client.imgSrc" :title="client.title" :url="client.url" /> -->
                    </swiper>
                </div>
                <div class="grid grid-cols-3 mt-20">
                    <progress-item v-for="(progress, index) in homeStore.progressItems" :key="index" :step="progress.step" :title="progress.title" :icon="progress.imgSrc" :url="progress.url" :description="progress.description" />
                </div>
            </div>
        </section>
        <section class="py-10 mt-20">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-2">
                    <div class="relative before:w-32 before:h-24 before:-left-16 before:bottom-1/3 before:absolute before:-z-10 before:bg-cover before:bg-no-repeat before:bg-[url('../assets/images/about/about-bg-dots.png')]">
                        <img src="src/assets/images/about/about-1.jpeg" alt="" class="rounded-md w-2/4 h-96 object-cover object-center inline-block" />
                        <img src="src/assets/images/about/about-2.jpeg" alt="" class="rounded-md w-2/4 h-96 object-cover object-top inline-block -mt-28 ml-32" />
                    </div>
                    <div class="pr-16">
                        <span class="text-blue-700 font-medium text-base mb-5 inline-block">It Support For Business</span>
                        <main-heading title="Preparing for your success trusted source in IT services" type="h2" />
                        <div class="mt-10">
                            <main-paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore:

                                <ul class="block list-disc ml-4 mt-5">
                                    <li>Which Means As The Company Ramps</li>
                                    <li>Which Means As The Company Ramps</li>
                                    <li>Which Means As The Company Ramps</li>
                                    <li>Which Means As The Company Ramps</li>
                                    <li>Which Means As The Company Ramps</li>
                                </ul>
                            </main-paragraph>
                            <main-button title="View Details" link="/about" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <team-list />
        <news-list />
        <Newsletter />
        <contact-form />

    </main>
</template>
<script>
import MainButton from "../components/reusable/MainButton.vue"
import MainHeading from '../components/reusable/MainHeading.vue'
import MainParagraph from '../components/reusable/MainParagraph.vue'
import ServiceCard from '../components/services/ServiceCard.vue'
import ClientItem from '../components/clients/ClientItem.vue'
import ProgressItem from '../components/progress/ProgressItem.vue'
import TeamList from '../components/team/TeamList.vue'
import ContactForm from '../components/contact/ContactForm.vue'
import NewsList from '../components/news/NewsList.vue'
import Newsletter from "../components/newsletter/Newsletter.vue"

import 'swiper/css';
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide, } from 'swiper/vue';
import { useHomeStore } from '../stores/HomeStore'

export default {
    components: {
        MainButton,
        MainHeading,
        MainParagraph,
        ServiceCard,
        Swiper,
        SwiperSlide,
        ClientItem,
        ProgressItem,
        TeamList,
        ContactForm,
        NewsList,
        Newsletter
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };
        const homeStore = useHomeStore();
        return {
            onSwiper,
            onSlideChange,
            homeStore
        };
    },

}
</script>