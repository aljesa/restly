<script>
import MainHeader from './components/layout/MainHeader.vue';
import MainFooter from './components/layout/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter,

  }
}
</script>

<template>
  <main-header />
  <RouterView />
  <main-footer />

</template>

