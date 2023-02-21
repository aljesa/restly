<template>
    <div class="relative h-full w-full pt-10 mb-10 pb-28 bg-no-repeat bg-cover bg-top before:absolute before:top-0 before:z-20 before:bg-black before:opacity-50 before:h-full before:w-full" :style="{ 'backgroundImage': 'url(' + bgImg + ')' }">
        <div class="container mx-auto px-4 mt-40 text-white z-50 relative">
            <div class="grid grid-cols-2">
                <div>
                    <main-heading :title="title" tag="h1" />
                    <!-- <span v-if="subTitle" class="inline-block text-white text-md">{{ subTitle }}</span> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Breadcrumb from './Breadcrumb.vue'
import MainHeading from './MainHeading.vue'
export default {
    components: {
        MainHeading,
        // Breadcrumb
    },
    props: {
        bgImg: {
            type: String,
        },
        title: {
            type: String,
        },
        subTitle: {
            type: String,
        }
    }
}
</script>