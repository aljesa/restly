<template>
    <section class="py-10">
        <div class="container mx-auto px-4">
            <div class="text-center mb-10">
                <span class="text-blue-700 font-medium text-base mb-5 inline-block">Recent Articles</span>
                <main-heading title="Latest news" tag="h2" />
            </div>
            <div class="grid grid-cols-3 gap-4">
                <news-card v-for="(item, index) in newsStore.news.items" :key="index" :imageSrc="item.imgSrc" :title="item.title" :description="item.description" :user="item.user" :date="item.date" />
            </div>
            <div class="text-center mt-10">
                <main-button title="View More" link="/news" />
            </div>
        </div>
    </section>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import MainButton from "../reusable/MainButton.vue"
import NewsCard from './NewsCard.vue';
import { useNewsStore } from '../../stores/NewsStore'

export default {
    components: {
        MainHeading,
        NewsCard,
        MainButton
    },
    setup() {
        const newsStore = useNewsStore();
        console.log(newsStore.news.items)
        return {
            newsStore
        };
    },

}
</script>