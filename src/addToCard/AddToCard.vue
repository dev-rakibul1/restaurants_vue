<template>
  <div
    class="p-5 mt-5 group flex items-center justify-between bg-white rounded-lg transition-all duration-200 border border-gray-100"
  >
    <!-- Previous code remains same until Product Info section -->

    <!-- Product Image with Skeleton -->
    <div class="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-50">
      <img
        :src="product.image || 'https://via.placeholder.com/64'"
        :alt="product.des"
        class="w-20 h-auto object-cover"
        @error="handleImageError"
      />
      <div
        v-if="imageError"
        class="absolute inset-0 bg-gray-100 flex items-center justify-center"
      >
        <span class="text-gray-400 text-xs">No image</span>
      </div>
    </div>

    <div class="ml-10">
      <!-- Product Info -->
      <div class="flex-grow px-3 w-full">
        <h3 class="text-sm font-medium text-gray-900 truncate max-w-[150px]">
          {{ product.des || "Product Name" }}
        </h3>
        <div class="flex mt-1 space-x-2 justify-start items-center">
          <span class="text-xs font-normal">
            ₸ {{ formatPrice(product.price * product.quantity) }}
          </span>
          <span>|</span>
          <span class="text-xs font-normal">Qty: {{ product.quantity }}</span>
        </div>
      </div>

      <!-- Quantity Controls -->
      <div class="flex items-center space-x-1.5 mt-5">
        <button
          @click="handleRemoveProduct(product)"
          :class="[
            'w-5 h-5 border flex items-center justify-center rounded-full transition-colors duration-200',
            quantity > 1
              ? 'bg-gray-100 hover:bg-gray-200 text-gray-600 active:bg-gray-300'
              : 'bg-gray-50 text-gray-300 cursor-not-allowed',
          ]"
        >
          <span class="transform translate-y-[-1px]">−</span>
        </button>

        <span
          class="w-8 text-center text-xs font-medium text-gray-900 select-none"
        >
          {{ quantity }}
        </span>

        <button
          @click="handleAddToCard(product)"
          class="border w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 transition-colors duration-200"
        >
          <span class="transform translate-y-[-1px]">+</span>
        </button>

        <!-- Delete Button -->
        <button
          @click="handleRemoveProductFromCart(product)"
          class="card__del w-5 h-5 flex items-center justify-center ml-10 border p-2 text-gray-400 hover:text-red-500 transition-colors duration-200 rounded-full hover:bg-red-50"
          title="Remove item"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Rest of the template remains same -->
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";

export default {
  name: "AddToCard",

  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        des: "",
        image: "",
        quantity: 0,
      }),
    },
    maxQuantity: {
      type: Number,
      default: 99,
    },
  },

  emits: ["update:quantity", "remove"],

  data() {
    return {
      quantity: this.product.quantity || 1, // Initialize from props
      imageError: false,
    };
  },

  setup() {
    const cartStore = useTaskStore(); // Use the Pinia store

    // Method to add items to the cart
    const handleAddToCard = (item) => {
      cartStore.addToProductCart(item);
    };
    const handleRemoveProduct = (item) => {
      cartStore.removeFromCart(item);
    };
    const handleRemoveProductFromCart = (item) => {
      cartStore.removeProductFromCart(item);
    };

    return {
      handleRemoveProduct,
      handleAddToCard,
      cartStore,
      handleRemoveProductFromCart,
    };
  },

  watch: {
    // Watch for changes in product.quantity
    "product.quantity"(newVal) {
      this.quantity = newVal || 1;
    },
  },

  methods: {
    formatPrice(price) {
      return Number(price).toFixed(2);
    },

    updateQuantity(change) {
      const newQuantity = this.quantity + change;
      if (newQuantity >= 1 && newQuantity <= this.maxQuantity) {
        this.quantity = newQuantity;
        this.$emit("update:quantity", {
          id: this.product.id,
          quantity: newQuantity,
        });
      }
    },

    handleImageError() {
      this.imageError = true;
    },
  },
};
</script>
