import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [{ name: "IPhone 16 pro max", price: 25.5 }],
    products: JSON.parse(localStorage.getItem("cart")) || [],
    cart: [],
    totalAmount: 0,
  }),

  actions: {
    addToCart(cart) {
      this.cart.push(cart);
    },

    initializeCart(cartItems) {
      this.products = cartItems;
      this.totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    addToProductCart(product, quantity = 1) {
      const existing = this.products.find((pro) => pro.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.products.push({ ...product, quantity });
      }

      this.totalAmount += product.price;
      this.saveCartToLocalStorage();
    },

    removeFromCart(product) {
      const existing = this.products.find((pro) => pro.id === product.id);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
        this.totalAmount -= product.price;
      } else {
        this.totalAmount -= existing.quantity * product.price;
        this.products = this.products.filter((pro) => pro.id !== product.id);
      }

      this.saveCartToLocalStorage();
    },

    removeProductFromCart(product) {
      this.totalAmount -= product.price * product.quantity;
      this.products = this.products.filter((pro) => pro.id !== product.id);
      this.saveCartToLocalStorage();
    },

    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.products));
    },
  },
});
