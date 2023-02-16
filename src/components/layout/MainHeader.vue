<template>
    <header class="relative">
        <div class="absolute w-full z-50">
            <div class="border-b border-white border-opacity-10 text-white py-5 mb-5">
                <div class="container mx-auto px-4 text-sm">
                    <div class="grid grid-cols-2">
                        <div class="">
                            <ul class="list-none inline-flex">
                                <li class="mr-5">
                                    <a :href="`tel:` + headerStore.phone" class="">{{ headerStore.phone }}</a>
                                </li>
                                <li>
                                    <a :href="`mailto:` + headerStore.email">{{ headerStore.email }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-end">
                            <ul>
                                <li>
                                    <a href="">{{ headerStore.time }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="absolute w-full z-50 bg-local">
                <div class="container mx-auto px-4 flex flex-wrap items-center">
                    <router-link to="/" class="flex items-center mr-10">
                        <img src="@/assets/images/logo.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    </router-link>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li v-for="(item, index) in headerStore.links" :key="index">
                                <router-link :to="item.path" class="block px-4 text-white text-lg transition-colors hover:text-blue-700">{{ item.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    </header>
</template>
<script>
import { useHeaderStore } from '../../stores/HeaderStore'
export default {
    setup() {
        const headerStore = useHeaderStore();

        return { headerStore }
    }
}
</script>