<template>
    <swiper-slide>
        <a :href="url" class="inline-block w-full h-7">
            <img :src="imageSrc" :alt="title" class="w-full h-full object-contain">
        </a>
    </swiper-slide>
</template>
<script>
import { SwiperSlide } from 'swiper/vue';
export default {
    components: {
        SwiperSlide,
    },
    props: {
        imageSrc: {
            type: String,
        },
        title: {
            type: String,
        },
        url: {
            type: String,
        }
    }
}</script>
