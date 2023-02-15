<template>
    <button :class="btnClass" :type="btnType" v-if="!link">
        {{ title }}
    </button>
    <router-link :to="link" :class="btnClass" v-else>{{ title }}</router-link>

</template>
<script>
export default {
    props: {
        link: {
            type: String,
            default: ''
        },
        title: {
            type: String,
        },
        btnClass: {
            type: String,
            default: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800 mt-5 inline-block'
        },
        btnType: {
            type: String,
            default: 'submit',
        }
    }
}
</script>