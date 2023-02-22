<template>
    <page-banner :bgImg="'../' + news.imgSrc" :title="news.title" />
    <section class="my-10">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-3 gap-x-4">
                <div class="col-span-2 text-gray-400">
                    <div class="flex gap-x-2 pb-5 mb-5 border-b justify-between text-sm">
                        <div class="mt-1">
                            <span><font-awesome-icon icon="fa-solid fa-user-tie" class="mr-2" /> {{ news.user }} / </span>
                            <span><font-awesome-icon icon="fa-regular fa-calendar" class="mr-2" />{{ news.date }}</span>
                        </div>
                        <div class="">
                            <ul class="">
                                <span class="mr-5 relative -top-3">Share Now:</span>
                                <li v-for="(social, index) in news.socialMedia" :key="index" class="inline-block mr-2 last:mr-0">
                                    <a href="" target="_blank" class="hover:bg-blue-800 transition-colors bg-blue-700 rounded-full w-8 h-8 inline-block p-1 relative">
                                        <font-awesome-icon :icon="social.icon" class="mr-2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <main-paragraph>{{ news.description }}</main-paragraph>
                    <ul class="list-disc ml-4 mt-5">
                        <li v-for="(item, index) in news.informations" :key="index" class="mb-5">
                            <span class="font-bold block" v-if="item.title">{{ item.title }}:</span>
                            {{ item.description }}
                        </li>
                    </ul>
                </div>
                <div class="">

                </div>
            </div>
        </div>
    </section>
</template>
<script>
import PageBanner from '../components/reusable/PageBanner.vue'
import NewsCard from '../components/news/NewsCard.vue';
import NewsCategoryCard from '../components/news/NewsCategoryCard.vue';
import RecentNewsCard from '../components/news/RecentNewsCard.vue';
import WorkTogether from '../components/news/WorkTogether.vue';
import { useNewsStore } from '../stores/NewsStore';
import MainHeading from '../components/reusable/MainHeading.vue';
export default {
    components: { PageBanner, NewsCard, RecentNewsCard, NewsCategoryCard, WorkTogether, MainHeading },
    computed: {
        news() {
            const id = this.$route.params.id;
            const newsStore = useNewsStore();
            const news = newsStore.news.items.find(item => item.id === parseInt(id));

            return news;
        }
    }



}
</script>