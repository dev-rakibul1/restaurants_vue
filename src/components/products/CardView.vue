<template>
  <div>
    <!-- ✅ Toast Notification -->
    <transition name="toast-fade">
      <div
        v-if="messageShown"
        class="fixed p-5 top-4 left-1/2 transform -translate-x-1/2 bg-green-100 px-4 py-2 rounded shadow-lg z-50"
      >
        <div class="flex items-center justify-start">
          <img src="../../assets/images/circle.png" class="w-4 h-4" alt="" />
          <p style="margin-left: 10px">Added to cart!</p>
        </div>
      </div>
    </transition>

    <!-- 🛒 Product Card -->
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
        :disabled="!product.status"
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
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";
import { computed, nextTick, onMounted, ref } from "vue";

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
    const messageShown = ref(false);

    const handleAddToCard = async (item) => {
      if (!item?.id) {
        console.error("Product must have a unique ID!");
        return;
      }

      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProductIndex = currentCart.findIndex(
        (p) => p.id === item.id
      );

      if (existingProductIndex >= 0) {
        currentCart[existingProductIndex].quantity += 1;
      } else {
        currentCart.push({
          ...item,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(currentCart));
      store.initializeCart(currentCart);

      // ✅ Show toast message
      messageShown.value = true;

      await nextTick();
      setTimeout(() => {
        messageShown.value = false;
      }, 2000);
    };

    const productList = computed(() => store.products);
    const cartList = computed(() => store.cart);

    onMounted(() => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        store.initializeCart(JSON.parse(savedCart));
      }
    });

    return { store, handleAddToCard, productList, cartList, messageShown };
  },
  methods: {
    redirectToProduct(id) {
      this.$router.push({ name: "CartDetails", params: { id } });
    },
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

/* ✅ Toast Animation */
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.toast-fade-enter-to,
.toast-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
