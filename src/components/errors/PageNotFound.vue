<template>
    <page-banner bgImg="/src/assets/images/hero/not-found-hero.jpeg" title="Page not found" />
    <section class="my-10">
        <div class="container mx-auto px-4">
            <div class="grid text-center">
                <div class="w-1/2 mx-auto">
                    <span class="text-8xl font-bold text-blue-700 mb-5 block">404</span>
                    <main-paragraph>We can't seem to find the page you're looking for. It looks like the page you were trying to access may have been moved, deleted, or never existed in the first place. We're sorry for any inconvenience this may have caused.</main-paragraph>
                    <main-button link="/" title="Back to Homepage" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import PageBanner from '../reusable/PageBanner.vue'
import MainHeading from '../reusable/MainHeading.vue'
import MainParagraph from '../reusable/MainParagraph.vue'
import MainButton from '../reusable/MainButton.vue'

export default {
    name: 'PageNotFound',
    components: {
        MainHeading, PageBanner, MainParagraph,
        MainButton
    }

}
</script>,
        MainParagraph