<template>
    <page-banner bgImg="/src/assets/images/hero/about-hero.jpeg" title="About" />
    <ul class="bg-red">
        <li v-for="(crumb, index) in crumbs" :key="index">
            <router-link :to="crumb.path">{{ crumb.name }}</router-link>
        </li>
    </ul>
    <section class="py-10 mt-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2">
                <div class="relative before:w-32 before:h-24 before:-left-16 before:bottom-1/3 before:absolute before:-z-10 before:bg-cover before:bg-no-repeat before:bg-[url('../assets/images/about/about-bg-dots.png')]">
                    <img src="src/assets/images/about/about-1.jpeg" alt="" class="rounded-md w-2/4 h-96 object-cover object-center inline-block" />
                    <img src="src/assets/images/about/about-2.jpeg" alt="" class="rounded-md w-2/4 h-96 object-cover object-top inline-block -mt-28 ml-32" />
                </div>
                <div class="pr-16">
                    <span class="text-blue-700 font-medium text-base mb-5 inline-block">It Support For Business</span>
                    <main-heading title="Preparing for your success trusted source in IT services" tag="h2" />
                    <div class="mt-10">
                        <main-paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore:

                            <ul class="block list-disc ml-4 mt-5">
                                <li>Which Means As The Company Ramps</li>
                                <li>Which Means As The Company Ramps</li>
                                <li>Which Means As The Company Ramps</li>
                                <li>Which Means As The Company Ramps</li>
                                <li>Which Means As The Company Ramps</li>
                            </ul>
                        </main-paragraph>
                        <main-button title="View Details" link="/about" />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import PageBanner from '../components/reusable/PageBanner.vue'
import MainHeading from '../components/reusable/MainHeading.vue'
import MainButton from "../components/reusable/MainButton.vue"
import { useBreadcrumbStore } from '../stores/BreadcrumbStore'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
    components: { PageBanner, MainButton, MainHeading },
    setup() {
        const breadcrumbStore = useBreadcrumbStore();

        // return { breadcrumbStore }


        const route = useRoute();
        const crumbs = computed(() => {

            const routes = route.matched.slice(1)
            return routes.map((route) => ({
                name: route.name,
                path: route.path,
            }))
        })
        var test = breadcrumbStore.setCrumbs(crumbs.value)
        // console.log(test);

        return { crumbs }
    }

}</script>