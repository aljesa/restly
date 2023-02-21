<template>
    <page-banner bgImg="/src/assets/images/hero/404-hero.jpeg" title="Page not found" />
    <section class="my-10">
        <div class="container mx-auto px-4">
            <div class="grid text-center">
                <div>
                    <span class="text-8xl font-bold text-blue-700 mb-5">404</span>
                    <main-paragraph><span class="font-bold text-4xl">Oops!</span>The page you are looking for doesn't exist.</main-paragraph>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import PageBanner from '../reusable/PageBanner.vue'
import MainHeading from '../reusable/MainHeading.vue'
import MainParagraph from '../reusable/MainParagraph.vue'

export default {
    name: 'PageNotFound',
    components: {
        MainHeading, PageBanner, MainParagraph
    }

}
</script>,
        MainParagraph