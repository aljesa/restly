<template>
    <div class="bg-white p-5 border border-gray-200 rounded">
        <main-heading :title="title" tag="h5" />
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
export default {
    components: { MainHeading },
    props: {
        title: {
            type: String,
        }
    }
}
</script>