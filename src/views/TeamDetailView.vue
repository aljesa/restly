<template>
    <page-banner bgImg="/src/assets/images/hero/team-detail-hero.jpeg" title="Team Details" />
    <div class="container mx-auto px-4 mb-10">
        <div class="grid grid-cols-3 gap-10">
            <div>
                <figure class="">
                    <img :src="'../' + team.image" alt="" class="rounded">
                </figure>
            </div>
            <div class="col-span-2">
                <main-heading :title="team.name" tag="h2" />
                <main-paragraph v-html="team.bio" class="mt-5" />
                <main-heading title="Education & Certifications" tag="h3" />
                <ul class="my-5">
                    <li v-for="(education, index) in team.education" :key="index" class="text-gray-400 block">
                        <span class="mr-2 text-sm">"{{ education.degree }}",</span>
                        <span class="text-sm">{{ education.university }} - {{ education.date }}</span>
                    </li>
                </ul>
                <main-heading title="Skills" tag="h3" />
                <ul class="my-5">
                    <li v-for="(skill, index) in team.skills" :key="index" class="text-gray-400 block">
                        <span class="mr-2 text-sm">{{ skill.title }}</span>
                    </li>
                </ul>
                <main-heading title="Follow Me" tag="h3" />
                <ul class="mt-5">
                    <li v-for="(social, index) in team.socialMedia" :key="index" class="inline-block mr-2">
                        <a :href="social.socialUrl" target="_blank" class="w-7 h-7 inline-block bg-blue-700 relative p-5 rounded-full transition-colors hover:bg-blue-800">
                            <img :src="social.icon" :alt="social.title" class="object-cover w-5 h-5 absolute -translate-x-1/2 -translate-y-1/2">
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>
<script>
import MainHeading from '../components/reusable/MainHeading.vue'
import MainParagraph from '../components/reusable/MainParagraph.vue'
import PageBanner from '../components/reusable/PageBanner.vue'
import { useHomeStore } from '../stores/HomeStore'


export default {
    components: { PageBanner, MainHeading, MainParagraph },
    computed: {
        team() {
            const id = this.$route.params.id;
            const homeStore = useHomeStore();
            const team = homeStore.teamMembers.find(item => item.id === parseInt(id));
            // console.log(team.name);
            return team;
        }
    }

}</script>
