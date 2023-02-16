<template>
    <ul>
        <li v-for="(crumb, index) in breadcrumbStore.crumbs" :key="index">
            <router-link :to="crumb.path">{{ crumb.name }}</router-link>
        </li>
    </ul>
</template>
<script>
import { useBreadcrumbStore } from '../../stores/BreadcrumbStore'


export default {
    setup() {
        const breadcrumbStore = useBreadcrumbStore();

        return { breadcrumbStore }
    }
}
</script>