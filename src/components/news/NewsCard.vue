<template>
    <div v-if="title" class="relative rounded-lg shadow-2xl p-5 border-gray-800 border-opacity-10">
        <router-link :to="link" v-if="imageSrc">
            <img class="rounded-lg" :src="imageSrc" :alt="title" />
        </router-link>
        <div class="py-5 flex justify-between">
            <div>
                <div class="flex justify-between">
                    <span class="inline-block text-sm">by {{ user }}</span>
                    <span class="inline-block text-sm"> {{ date }}</span>
                </div>
                <router-link :to="link" v-if="title" class="my-2 inline-block">
                    <main-heading tag="h5" :title="title" class="hover:text-blue-600 transition-colors" />
                </router-link>
                <main-paragraph>{{ description }}</main-paragraph>
            </div>
        </div>
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import MainParagraph from '../reusable/MainParagraph.vue'
export default {
    components: { MainHeading, MainParagraph },
    props: {
        imageSrc: {
            type: String,
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
        user: {
            type: String,
        },
        date: {
            type: String,
        },
        link: {
            type: String,
        }
    }
}
</script>
