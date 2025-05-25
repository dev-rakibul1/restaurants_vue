<template>
  <div style="padding-top: 80px">
    <h2
      v-if="filteredProducts && filteredProducts.length"
      class="font-semibold text-2xl md:text-3xl"
    >
      Напитки
    </h2>

    <!-- Loading state -->
    <div v-if="loading" class="text-gray-500 mt-4">Loading...</div>

    <!-- Error state -->
    <div v-if="error" class="text-red-500 mt-4">Error: {{ error.message }}</div>

    <!-- Products grid -->
    <div
      v-if="!loading && !error"
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

<script setup>
import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { computed, ref, watchEffect } from "vue";
import CardView from "../CardView.vue";

// Set the category to filter
const category = ref("p-9");

// GraphQL query to get products
const GET_PRODUCTS = gql`
  query {
    products {
      id
      price
      image
      category
      status
      des
    }
  }
`;

// Fetch the products
const { result, loading, error } = useQuery(GET_PRODUCTS);

// Log when data is received
watchEffect(() => {
  if (result.value) {
    // console.log("Fetched products:", result.value.products);
  }
});

// Filter products by selected category
const filteredProducts = computed(() => {
  return (
    result.value?.products?.filter(
      (product) => product.category === category.value
    ) || []
  );
});
</script>

<style scoped>
.section__wrap {
  margin-top: 20px;
}
</style>
