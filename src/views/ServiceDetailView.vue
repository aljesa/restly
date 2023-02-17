<template>
    <page-banner :bgImg="'../' + service.imgSrc" :title="service.title" />
    <div class="container mx-auto px-4 mb-10">
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
                <main-paragraph v-html="service.description"></main-paragraph>
                <ul class="list-disc ml-4 text-gray-400">
                    <li v-for="(item, index) in service.subServices" :key="index" class="mb-5">
                        <span class="font-bold block">{{ item.title }}:</span>
                        {{ item.description }}
                    </li>
                </ul>
            </div>
            <div class="h-96">
                <contact-box />
            </div>
        </div>
    </div>
</template>
<script>
import PageBanner from '../components/reusable/PageBanner.vue'
import { useServicesStore } from '../stores/ServicesStore'
import MainHeading from '../components/reusable/MainHeading.vue'
import MainParagraph from '../components/reusable/MainParagraph.vue'
import ContactBox from '../components/contact/ContactBox.vue'
export default {
    components: { PageBanner, MainHeading, MainParagraph, ContactBox },
    computed: {
        service() {
            const id = this.$route.params.id;
            const servicesStore = useServicesStore();
            const service = servicesStore.services.items.find(item => item.id === parseInt(id));
            return service;
        }
    }

}</script>
