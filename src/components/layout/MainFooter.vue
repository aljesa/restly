<template>
    <footer class="py-20 bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0 mr-10">
                    <router-link to="/" class="flex items-center">
                        <img src="@/assets/images/logo.png" class="h-8 mr-3" alt="FlowBite Logo" />
                    </router-link>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Quick Links</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4" v-for="(item, index) in footerStore.quickLinks" :key="index">
                                <router-link :to="item.path" class="hover:underline">{{ item.title }}</router-link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4" v-for="(item, index) in footerStore.socialMedia" :key="index">
                                <router-link :to="item.path" target="_blank" class="hover:underline ">{{ item.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Opening Hours</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4" v-for="(item, index) in footerStore.openingHours" :key="index">
                                <span>{{ item.day }} : {{ item.time }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="text-center">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline"></a>. All Rights Reserved.
                </span>
            </div>
        </div>


    </footer>

</template>
<script>
import { useFooterStore } from '../../stores/FooterStore'
export default {
    setup() {
        const footerStore = useFooterStore();
        console.log(footerStore.quickLinks);
        return { footerStore }
    }
}
</script>