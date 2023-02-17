<template>
    <section class="mt-10 mb-20 py-20 bg-blue-800">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 gap-x-4">
                <div class="text-white">
                    <main-heading title="The Byte: Your Weekly Dose of Software Development News and Insights." tag="h2" />
                </div>
                <div class="mt-10">
                    <form action="#" class="text-end relative">
                        <input type="email" placeholder="Your Email Address" class="text-white p-3 rounded-l text-sm placeholder-white placeholder-opacity-20 outline-none bg-transparent border border-white border-opacity-20">
                        <main-button title="Subscribe" class="bg-white py-3 text-blue-800 font-bold  mb-0 mt-0 rounded-l-none hover:bg-white" />
                    </form>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
import MainButton from '../reusable/MainButton.vue'
import MainHeading from '../reusable/MainHeading.vue'

export default {
    components: {
        MainHeading,
        MainButton
    }

}
</script>