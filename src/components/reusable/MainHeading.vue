<template>
    <h1 v-if="tag == 'h1'" class="text-6xl font-bold">{{ title }}</h1>
    <h2 v-else-if="tag == 'h2'" class="text-4xl font-extrabold">{{ title }}</h2>
    <h3 v-else-if="tag == 'h3'" class="text-2xl font-medium">{{ title }}</h3>
    <h4 v-else-if="tag == 'h4'" class="text-xl font-extrabold">{{ title }}</h4>
    <h5 v-else-if="tag == 'h5'" class="text-lg font-extrabold">{{ title }}</h5>

</template>
<script>
export default {
    props: {
        tag: {
            type: String,
        },
        title: {
            type: String,
        },
        headingClasses: {
            type: String,
        }
    }
}
</script>