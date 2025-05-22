<template>
  <div
    class="product__card"
    :class="{ 'opacity-50 pointer-events-none': product.status === false }"
  >
    <div>
      <img :src="product.image" alt="" />
    </div>
    <div class="product__header">
      <span class="product__year">{{ product.year }}</span>
      <h3 class="product__title text-xl md:text-2xl md:font-semibold">
        {{ product.price }} ₸
      </h3>
      <p class="product__des">{{ product.des }}</p>
    </div>

    <button
      class="add__button"
      @click="handleAddToCard(product)"
      :class="[
        'w-full py-2 rounded-lg font-medium flex items-center justify-center',
        product?.status && product?.isStock
          ? 'bg-gray-100 text-gray-900 hover:bg-gray-200 cursor-pointer'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed',
      ]"
    >
      <span class="card__plus" v-if="product.status">+</span>
      {{ product.status ? "Add" : "Out of Stock" }}
    </button>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";
import { computed, onMounted } from "vue";
//  :disabled="!product.status || !product?.isStock"

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        year: "1990T",
        title: "Краны Мастер Острый",
        status: true,
      }),
    },
  },
  setup() {
    const store = useTaskStore();

    console.log(store);

    const handleAddToCard = (item) => {
      store.addToProductCart(item);
      console.log("Item added to products:", store.products); // Log in the action
      console.log("Current Cart:", store.cart);
    };

    const productList = computed(() => store.products); // Create a computed property
    const cartList = computed(() => store.cart);

    onMounted(() => {
      console.log("Initial Products on mount:", store.products);
    });

    return { store, handleAddToCard, productList, cartList };
  },
  methods: {
    redirectToProduct(id) {
      this.$router.push({ name: "CartDetails", params: { id } });
    },
  },

  updateQuantity(change) {
    const newQuantity = this.quantity + change;
    if (newQuantity >= 1 && newQuantity <= this.maxQuantity) {
      this.quantity = newQuantity;
      this.$emit("update:quantity", newQuantity); // Emit event with new quantity
    }
  },

  emits: ["update:quantity"],
};
</script>

<style scoped>
.product__card {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  flex-direction: column;
  background: #fff;
  transition: opacity 0.3s ease;
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

.add__button {
  background-color: #ebeaea;
  width: 100%;
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.2s;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.add__button:disabled {
  cursor: not-allowed;
  background-color: #ccc;
  color: #555;
}

.card__plus {
  font-size: 20px;
}
</style>
