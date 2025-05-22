<template>
  <div style="padding-top: 80px">
    <h2 class="font-semibold text-2xl md:text-3xl">Боксы</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 section__wrap"
    >
      <CardView
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import CardView from "../CardView.vue";
import { products as allProducts } from "../../../utils/global.js";

export default {
  name: "CategoryFourView",
  components: {
    CardView,
  },
  data() {
    return {
      category: "p-4",
    };
  },
  computed: {
    filteredProducts() {
      return allProducts.filter(
        (product) => product.category === this.category
      );
    },
  },
};
</script>

<style>
/* .section__wrap {
  margin-top: 20px;
} */
</style>
