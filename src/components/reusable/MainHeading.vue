<template>
    <h1 v-if="type == 'h1'" class="text-6xl font-bold">{{ title }}</h1>
    <h2 v-else-if="type == 'h2'" class="text-4xl font-extrabold">{{ title }}</h2>
    <h3 v-else-if="type == 'h3'" class="text-2xl font-medium">{{ title }}</h3>
    <h4 v-else-if="type == 'h4'" class="text-xl font-extrabold">{{ title }}</h4>
    <h5 v-else-if="type == 'h5'" :class="headingClasses">{{ title }}</h5>

</template>
<script>
export default {
    props: {
        type: {
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