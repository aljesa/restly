<template>
    <!-- <h1>tests</h1> -->
    <page-banner bgImg="/src/assets/images/hero/about-hero.jpeg" title="About" />
    <ul class="bg-red">
        <li v-for="(crumb, index) in crumbs" :key="index">
            <router-link :to="crumb.path">{{ crumb.name }}</router-link>
        </li>
    </ul>
</template>
<script>
import PageBanner from '../components/reusable/PageBanner.vue'
import { useBreadcrumbStore } from '../stores/BreadcrumbStore'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
    components: { PageBanner },
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