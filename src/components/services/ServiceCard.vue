<template>
    <div v-if="title" class="relative rounded-lg shadow-xl px-5">
        <router-link :to="url" v-if="imageSrc">
            <img class="rounded-lg" :src="imageSrc" :alt="title" />
        </router-link>
        <div class="py-5 flex justify-between">
            <div>
                <span class="inline-block text-blue-600 text-sm">{{ category }}</span>
                <router-link :to="url" v-if="title">
                    <main-heading tag="h3" :title="title" class="hover:text-blue-600 transition-colors" />
                </router-link>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
export default {
    components: { MainHeading },
    props: {
        imageSrc: {
            type: String,
        },
        title: {
            type: String,
        },
        category: {
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
