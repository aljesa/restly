<template>
    <page-banner bgImg="/src/assets/images/hero/news-hero.jpeg" title="The Daily News" />
    <section class="my-10">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-3 gap-x-4">
                <div class="col-span-2">
                    <news-card class="mb-5 shadow-none border border-gray-400" v-for="(item, index) in newsStore.news.items" :key="index" :imageSrc="item.imgSrc" :title="item.title" :description="item.description" :user="item.user" :date="item.date" />
                </div>
                <div class="">
                    <recent-news-card title="Recent News" />
                    <news-category-card title="Categories" />
                    <div>
                        <work-together />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NewsCard from '../components/news/NewsCard.vue';
import NewsCategoryCard from '../components/news/NewsCategoryCard.vue';
import RecentNewsCard from '../components/news/RecentNewsCard.vue';
import WorkTogether from '../components/news/WorkTogether.vue';
import PageBanner from '../components/reusable/PageBanner.vue'
import { useNewsStore } from '../stores/NewsStore'

export default {
    components: { PageBanner, NewsCard, RecentNewsCard, NewsCategoryCard, WorkTogether },
    setup() {
        const newsStore = useNewsStore();
        return {
            newsStore
        };
    },

}
</script>