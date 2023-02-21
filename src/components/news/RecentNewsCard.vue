<template>
    <div class="bg-white shadow-2xl p-5 border border-gray-200 rounded-lg mb-5">
        <main-heading :title="title" tag="h5" class="relative before:absolute before:w-14 before:rounded before:h-0.5 before:bg-blue-700 before:-bottom-1 after:absolute after:w-2 after:h-0.5 after:-bottom-1 after:bg-white after:left-3 mb-10" />
        <recent-news-item v-for="(item, index) in newsStore.news.items" :key="index" :title="item.title" :imgSrc="item.imgSrc" :link="'/news/' + item.id" :postDate="item.date" />
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import RecentNewsItem from './RecentNewsItem.vue'
import { useNewsStore } from '../../stores/NewsStore'
export default {
    components: { MainHeading, RecentNewsItem },
    props: {
        title: {
            type: String,
        }
    },
    setup() {
        const newsStore = useNewsStore();
        return {
            newsStore
        }
    }
}
</script>