<template>
  <div class="product__card">
    <div>
      <img :src="product.image" alt="" />
    </div>
    <div class="product__header">
      <span class="product__year">{{ product.year }}</span>
      <h3 class="product__title text-xl md:text-2xl md:font-semibold">
        {{ product.title }}
      </h3>
      <p class="product__des">{{ product.des }}</p>
    </div>
    <button class="add__button" @click="$emit('add-to-cart')">+ Add</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        year: "1990T",
        title: "Краны Мастер Острый",
      }),
    },
  },
};
</script>

<style scoped>
.product__card {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  flex-direction: column;
  background: #fff;
}

.product__header {
  display: flex;
  flex-direction: column;
}

.product__year {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.product__title {
  /* font-size: 16px;
  font-weight: bold;
  margin: 0; */
}

.add__button {
  background-color: #ebeaea;
  width: 100%;
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  margin-top: 40px;
}

/* .add__button:hover {
  color: white;
} */
</style>
