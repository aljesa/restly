<template>
    <div class="bg-white p-5 border border-gray-200 rounded">
        <main-heading :title="title" tag="h5" />
        <recent-news-item title="Our Company Wins Award for Innovation in Software Development" imgSrc="src/assets/images/news/news-1.jpeg" url="/" date="21/02/2023" />
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import RecentNewsItem from './RecentNewsItem.vue'
export default {
    components: { MainHeading, RecentNewsItem },
    props: {
        title: {
            type: String,
        }
    }
}
</script>