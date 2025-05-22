<template>
  <div style="padding-top: 80px">
    <h2 class="font-semibold text-2xl md:text-3xl">Соло баскеты</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
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
  name: "CategoryTwoView",
  components: {
    CardView,
  },
  data() {
    return {
      category: "p-2",
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
