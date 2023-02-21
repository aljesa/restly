<template>
    <li class="d-inline-block mb-2">
        <a :href="link" class="flex justify-between hover:text-blue-700 transition-colors">
            <span>{{ title }}</span>
            <span>({{ quantity }})</span>
        </a>
    </li>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        link: {
            type: String,
        }
    }

}
</script>