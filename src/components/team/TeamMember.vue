<template>
    <div class="">
        <router-link to="/" class="w-full h-96 inline-block">
            <img :src="image" class="rounded w-full h-full object-cover" />
        </router-link>
        <div class="text-center bg-white mx-5 text-slate-500 p-5 rounded -mt-10 z-10 relative">
            <router-link to="/">
                <main-heading :title="name" type="h4" />
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
        position: {
            type: String,
        },

    }
}
</script>