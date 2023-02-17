<template>
    <div class="text-center text-white mb-10">
        <span class="relative inline-block font-normal text-8xl opacity-20 top-8">{{ step }}</span>
        <div class="bg-white w-32 h-32 p-5 rounded-full mx-auto relative mb-5">
            <img :src="icon" :alt="title" class="absolute -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4">
        </div>
        <router-link :to="url">
            <main-heading :title="title" tag="h4" />
        </router-link>
        <main-paragraph class="text-white mt-5">{{ description }}</main-paragraph>
        <main-button title="Read More" :link="url" />
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import MainParagraph from '../reusable/MainParagraph.vue'
import MainButton from "../reusable/MainButton.vue"
export default {
    components: { MainHeading, MainParagraph, MainButton },
    props: {
        step: {
            type: Number,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        icon: {
            type: String,
        },
        url: {
            type: String,
        }
    }
}</script>
