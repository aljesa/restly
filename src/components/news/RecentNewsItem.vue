<template>
    <div class="flex mt-5">
        <div class="mr-5">
            <figure class="w-20 h-20 rounded">
                <img :src="imgSrc" :alt="title" class="w-full h-full object-cover rounded-full">
            </figure>

        </div>
        <div>
            <router-link :to="link" class="font-bold inline-block hover:text-blue-700 cursor-pointer">{{ title }}</router-link>
            <span class="text-gray-400 text-sm">{{ postDate }}</span>
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