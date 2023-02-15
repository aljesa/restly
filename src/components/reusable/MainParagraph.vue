<template>
    <p :class="paragraphClasses">
        <slot></slot>
    </p>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
        },
        paragraphClasses: {
            type: String,
            default: 'text-md mb-5 text-gray-400'
        }
    }
}
</script>