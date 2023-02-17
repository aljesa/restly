<template>
    <section class="mt-10 -mb-10 relative rounded">
        <div class="container mx-auto px-4">
            <div class="bg-white p-10 rounded shadow-2xl border border-gray-800 border-opacity-5">
                <div class="grid grid-cols-3 gap-x-7">
                    <div class="col-span-2">
                        <main-heading title="Get In Touch" type="h2" />
                        <form @submit.prevent="handleSubmit" class="mt-5">
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-6 group">
                                    <input v-model="formStore.name" @input="formStore.validate('name')" type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-slate-200 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <span v-if="formStore.errors.name" class="block text-red-500 text-xs mt-2 font-medium">{{ formStore.errors.name }}</span>
                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name*</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input v-model="formStore.email" @input="formStore.validate('email')" type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-slate-200 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <span v-if="formStore.errors.email" class="block text-red-500 text-xs mt-2 font-medium">{{ formStore.errors.email }}</span>
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-Mail</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input v-model="formStore.phoneNumber" @input="formStore.validate('phoneNumber')" type="text" name="floating_phone_number" id="floating_phone_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-slate-200 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <span v-if="formStore.errors.phoneNumber" class="block text-red-500 text-xs mt-2 font-medium">{{ formStore.errors.phoneNumber }}</span>
                                    <label for="floating_phone_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <select id="floating_service" name="floating_service" class="appearance block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-slate-200 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                        <option value="" selected disabled hidden></option>
                                        <option value="About" class="p-2">About</option>
                                        <option value="Team" class="p-2">Team</option>
                                        <option value="Contact" class="p-2">Contact</option>
                                    </select>
                                    <label for="floating_service" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group col-span-2">
                                    <textarea v-model="formStore.message" @input="formStore.validate('message')" rows="4" name="floating_message" id="floating_message" class="resize-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-slate-200 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></textarea>
                                    <span v-if="formStore.errors.message" class="block text-red-500 text-xs mt-2 font-medium">{{ formStore.errors.message }}</span>
                                    <label for="floating_message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Let us know what you need</label>
                                </div>
                            </div>
                            <main-button title="Send Message" />
                        </form>
                    </div>
                    <contact-box />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import MainButton from "../reusable/MainButton.vue"
import { useFormStore } from '../../stores/FormStore'
import ContactBox from './ContactBox.vue'

export default {
    components: {
        MainHeading,
        MainButton,
        ContactBox
    },
    setup() {
        const formStore = useFormStore();


        function handleSubmit() {
            formStore.validate()
            if (!Object.values(formStore.errors).some(Boolean)) {
                // Submit the form data
                console.log('Form data:', { name: formStore.name, email: formStore.email, phoneNumber: formStore.phoneNumber })
            }
        }

        return { formStore, handleSubmit }
    },

}
</script>