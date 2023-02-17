<template>
    <section class="py-20 mt-40 text-white bg-blue-800">
        <div class="container mx-auto px-4">
            <div class="text-center mb-10">
                <span>Team Members</span>
                <main-heading title="Our Awesome Team" tag="h2" />
            </div>
            <div class="grid grid-cols-4 gap-x-4">
                <team-member v-for="(member, index) in homeStore.teamMembers" :key="index" :url="'/team/' + member.id" :image="member.image" :name="member.name" :position="member.position" />
            </div>
        </div>
    </section>
</template>
<script>
import MainHeading from '../reusable/MainHeading.vue'
import TeamMember from './TeamMember.vue'
import { useHomeStore } from '../../stores/HomeStore'

export default {
    components: {
        MainHeading, TeamMember
    },
    setup() {
        const homeStore = useHomeStore();
        return {
            homeStore
        };
    },

}
</script>