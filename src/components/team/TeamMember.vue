<template>
    <div class="">
        <router-link :to="url" class="w-full h-96 inline-block">
            <img v-lazy="image" class="rounded w-full h-full object-cover object-center" />
        </router-link>
        <div class="text-center bg-white mx-5 text-slate-500 p-5 rounded -mt-10 z-10 relative">
            <router-link :to="url">
                <main-heading :title="name" tag="h4" />
            </router-link>
            <span>{{ position }}</span>
        </div>
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
export default {
    components: {
        MainHeading
    },
    props: {
        image: {
            type: String,
        },
        name: {
            type: String,
        },
        url: {
            type: String,
        },
        position: {
            type: String,
        },

    }
}
</script>