<template>
    <div class="text-white h-full relative w-full p-12 rounded bg-no-repeat bg-cover bg-center-center bg-[url('src/assets/images/about/about-2.jpeg')] before:absolute before:top-0 before:left-0 before:z-20 before:rounded before:bg-blue-900 before:opacity-80 before:h-full before:w-full">
        <div class="relative z-30">
            <main-heading title="Working Together" tag="h3" />
            <main-paragraph class="text-white mt-5">Effective collaboration is the key to success in any team or organization. By working together, we can achieve more than we ever could on our own. Whether you're working on a project, planning an event, or trying to solve a complex problem, collaborating with others can help you achieve your goals more efficiently and effectively.</main-paragraph>
            <router-link to="/services" class="border border-white py-2 px-5 rounded-lg">Contact now</router-link>
        </div>
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import MainParagraph from '../reusable/MainParagraph.vue'
export default {
    components: {
        MainHeading,
        MainParagraph,
    }
}
</script>