<template>
    <main>
        <div class="pt-10 mb-10 h-96 pb-28 bg-no-repeat bg-cover bg-center-center bg-[url('../assets/images/hero-three.jpg')] before:absolute before:top-10 before:z-20 before:bg-slate-900 before:opacity-40 before:h-96 before:w-full">
            <div class="container mx-auto px-4 pt-20 text-white z-50 relative">
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
        <section class="py-10 mt-10 bg-blue-700">
            <div class="container mx-auto px-4">
                <div class="bg-white relative -mt-20 shadow-xl py-10 px-20 rounded-md">
                    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>

                    </swiper>
                </div>
            </div>

        </section>
    </main>
</template>
<script>
import MainButton from "../components/reusable/MainButton.vue"
import MainHeading from '../components/reusable/MainHeading.vue'
import MainParagraph from '../components/reusable/MainParagraph.vue'
import ServiceCard from '../components/services/ServiceCard.vue'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    components: {
        MainButton, MainHeading, MainParagraph, ServiceCard, Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
}
</script>