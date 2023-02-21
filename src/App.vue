<template>
  <div v-if="isLoading" class="bg-red-500 absolute top-0 left-0 w-full h-full">
    <h1>aljesa</h1>
  </div>
  <main-header />
  <RouterView />
  <main-footer />
</template>
<script>
import MainHeader from './components/layout/MainHeader.vue';
import MainFooter from './components/layout/MainFooter.vue';
import { useAnimationStore } from './stores/AnimationStore';

export default {
  components: {
    MainHeader,
    MainFooter,
  },
  setup() {
    const animationStore = useAnimationStore();
    console.log(animationStore.isLoading);
    return {
      isLoading: animationStore.isLoading
    }
  }
}
</script>
