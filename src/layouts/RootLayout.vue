<template>
  <div>
    <nav>
      <!-- Top nav -->
      <MenuView />
    </nav>

    <!-- main area -->
    <main style="margin-top: 150px">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import MenuView from "../components/menu/MenuView.vue";
import FooterView from "../components/footer/FooterView.vue";

export default {
  name: "RootLayout",
  components: {
    MenuView,
    FooterView,
  },
};
</script>
