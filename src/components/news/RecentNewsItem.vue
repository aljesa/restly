<template>
    <div class="flex">
        <div>
            <img :src="imgSrc" :alt="title">
        </div>
        <div>
            <a :href="link">{{ title }}</a>
            <span>{{ postDate }}</span>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        imgSrc: {
            type: String,
        },
        title: {
            type: String,
        },
        postDate: {
            type: String,
        },
        link: {
            type: String,
        }
    }

}
</script>