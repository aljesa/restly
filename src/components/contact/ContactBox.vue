<template>
    <div class="text-white h-full relative w-full p-12 rounded bg-no-repeat bg-cover bg-center-center bg-[url('src/assets/images/about/about-2.jpeg')] before:absolute before:top-0 before:left-0 before:z-20 before:rounded before:bg-blue-900 before:opacity-80 before:h-full before:w-full">
        <div class="relative z-30">
            <main-heading title="Don't hesitate to contact us" type="h3" />
            <ul class="mt-5 block">
                <li class="mb-5">
                    <span class="inline-block">Call us</span>
                    <a href="tel:+012-345-6789" class="block font-extrabold">
                        +012-345-6789
                    </a>
                </li>
                <li class="mb-5">
                    <span class="inline-block">Write to us</span>
                    <a href="mailto:info@example.com" class="block font-extrabold">
                        info@example.com
                    </a>
                </li>
                <li class="mb-5">
                    <span class="inline-block">Office hours</span>
                    <a href="javascript:void(0)" class="block font-extrabold">
                        Mon-Sat 9:00 - 7:00
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
export default {
    components: {
        MainHeading
    }
}
</script>