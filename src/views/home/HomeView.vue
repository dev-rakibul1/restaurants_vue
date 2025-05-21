<template>
  <div class="container">
    <!-- Home lauout -->
    <HomeLayout />

    <!-- App store -->
    <AppStore />
  </div>
</template>
<script>
import AppStore from "@/components/home/appStore/AppStore.vue";
import HomeLayout from "@/components/home/HomeLayout.vue";

export default {
  name: "HomeView",

  components: {
    HomeLayout,
    AppStore,
  },
};
</script>
<style lang=""></style>
