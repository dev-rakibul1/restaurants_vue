<template>
  <div>
    <h2 class="font-semibold text-2xl md:text-3xl">Новинки</h2>

    <!-- card -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
    >
      <CardView
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import CardView from "../CardView.vue";

export default {
  name: "CategoryOneView",

  components: {
    CardView,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          image:
            "https://eda.yandex/images/14571459/7d0100718e02eaf9ab0a287f3897c25d-216x188.jpeg",
          title: "1  990 ₸",
          des: "Кранч Мастер Острый",
          category: "p-1",
        },
        {
          id: 2,
          image:
            "https://eda.yandex/images/14571459/7d0100718e02eaf9ab0a287f3897c25d-216x188.jpeg",
          title: "1  990 ₸",
          des: "Кранч Мастер Острый",
          category: "p-1",
        },
        {
          id: 3,
          image:
            "https://eda.yandex/images/14571459/7d0100718e02eaf9ab0a287f3897c25d-216x188.jpeg",
          title: "1  990 ₸",
          des: "Кранч Мастер Острый",
          category: "p-1",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
